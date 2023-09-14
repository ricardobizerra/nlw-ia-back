import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'

import { prompts } from './routes/prompts'
import { uploads } from './routes/uploads'
import { transcription } from './routes/transcription'
import { completion } from './routes/completion'

const app = fastify()

app.register(fastifyCors, {
    origin: '*'
})

app.register(prompts)
app.register(uploads)
app.register(transcription)
app.register(completion)

app.listen({
    port: 3333,
}).then(() => {
    console.log('🚀 server is running on port 3333!')
})