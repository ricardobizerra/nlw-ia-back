import { FastifyInstance } from "fastify";
import { fastifyMultipart } from '@fastify/multipart'

import path from "node:path";
import { randomUUID } from "node:crypto";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import fs from "node:fs";
import { prisma } from "../lib/prisma";

const pump = promisify(pipeline)

export async function uploads(app: FastifyInstance) {
    app.register(fastifyMultipart, {
        limits: {
            fileSize: 1_048_576 * 25, // 25MB
        }
    })

    app.post('/videos', async (request, reply) => {
        const data = await request.file();

        if (!data) {
            return reply.status(400).send({ error: 'No file uploaded' });
        }

        const extension = path.extname(data.filename);

        if (extension !== '.mp3') {
            return reply.status(400).send({ error: 'Invalid file type' });
        }

        const fileBaseName = path.basename(data.filename, extension);
        const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`;

        const uploadDestiny = path.join(__dirname, '../../tmp', fileUploadName);

        await pump(data.file, fs.createWriteStream(uploadDestiny));

        const video = await prisma.video.create({
            data: {
                name: data.filename,
                path: uploadDestiny,
            }
        })

        return reply.status(201).send({ video });
    })
}