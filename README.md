# nlw-ia-back

Este projeto constitui o back-end de uma aplicação desenvolvida durante a **Next Level Week (NLW)** da Rocketseat, focada em Inteligência Artificial. A aplicação permite que os usuários façam **upload de vídeos**, e através da integração com IA, gera automaticamente títulos atraentes e descrições otimizadas.

## Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas neste projeto incluem:

- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Fastify**: Framework web para Node.js, focado em performance e baixo overhead.
- **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados de forma eficiente.
- **Zod**: Biblioteca de validação e parsing de esquemas TypeScript.
- **OpenAI API**: Interface para acessar modelos avançados de IA para geração de conteúdo.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.

## Funcionalidades

- **Upload de Vídeos**: Recebe vídeos enviados pelos usuários para processamento.
- **Geração de Títulos e Descrições com IA**: Utiliza IA para analisar o conteúdo dos vídeos e criar títulos e descrições envolventes e otimizados para SEO.

## Instalação e Uso

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/ricardobizerra/nlw-ia-back.git
   ```

2. **Acesse o diretório do projeto**:

   ```bash
   cd nlw-ia-back
   ```

3. **Instale as dependências**:

  i. Se estiver utilizando pnpm:

    ```bash
    pnpm install
    ```

  ii. Ou, se estiver utilizando npm:

    ```bash
    npm install
    ```

4. **Configure as variáveis de ambiente**:

  Renomeie o arquivo .env.example para .env e ajuste as variáveis conforme necessário.

5. **Execute as migrações do banco de dados**:

  ```bash
  npx prisma migrate dev
  ```

6. **Inicie o servidor de desenvolvimento**:

  i. Se estiver utilizando pnpm:

    ```bash
    pnpm dev
    ```

  ii. Ou, se estiver utilizando npm:

    ```bash
    npm run dev
    ```

7. **Acesse a aplicação**:

  O servidor estará em execução no endereço http://localhost:3000.