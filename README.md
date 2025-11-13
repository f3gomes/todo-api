# 🗂️ TODO API

API RESTful para gerenciamento de tarefas, construída com **Node.js**, **TypeScript**, **Express** e **Prisma**.  
Permite criar, listar, atualizar e excluir tarefas — podendo ser executada localmente ou via **Docker Compose**.

---

## 🧑‍💻 Rodando o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/f3gomes/todo-api.git

   cd todo-api
   ```

---

## 🐳 Executando com Docker Compose

Para executar o projeto com **Docker** (API + banco de dados MySQL em containers):

3. Inicie os containers:

   ```bash
   docker compose up
   ```

   Isso iniciará o banco de dados e a API na porta **3000**:  
   👉 http://localhost:3333/api/v1

> ⚠️ É necessário ter **Docker** e **Docker Compose** instalados.

---

## ⚙️ Executando sem Docker

1. Crie um arquivo `.env` na raiz do projeto com as variáveis abaixo (exemplo):

   ```env
   DATABASE_URL="mysql://root:password@localhost:3306/tododb"
   NODE_ENV=development
   PORT=3333
   ```

2. Gere o client do Prisma:

   ```bash
   npx prisma generate
   ```

3. Crie o schema do banco de dados localmente (sem Docker):

   ```bash
   npx prisma db push
   ```

4. Inicie o servidor em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou, para produção:

   ```bash
   npm run build
   npm start
   ```

---

## 📁 Estrutura do projeto

```
.
├── prisma/
│   └── schema.prisma
├── src/
│   ├── index.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── middlewares/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── .env.example
```

---

## 🚀 Tecnologias utilizadas

- **Node.js** (v20 recomendado)
- **TypeScript**
- **Express.js**
- **Prisma ORM**
- **MySQL** (via Docker)
- **dotenv** para variáveis de ambiente
- **ts-node-dev** para hot reload em desenvolvimento
- **Docker** e **Docker Compose** para execução containerizada

---

## 📡 Endpoints principais

| Método | Rota               | Descrição              |
| ------ | ------------------ | ---------------------- |
| GET    | `/task/list`       | Lista todas as tarefas |
| POST   | `/task/new`        | Cria uma nova tarefa   |
| PATCH  | `/task/edit/:id`   | Atualiza uma tarefa    |
| DELETE | `/task/delete/:id` | Exclui uma tarefa      |

Exemplo de requisição:

```bash
curl -X POST http://localhost:3333/api/v1/task/new   -H "Content-Type: application/json"   -d '{"title": "Nova tarefa", "description": "Exemplo", "author": "Felipe"}'
```

---

## 🧩 Problemas comuns (Sem Docker)

- **Erro de conexão com o banco**: verifique se o container MySQL está ativo (`docker ps`) e se a `DATABASE_URL` está correta.
- **Porta 3000 ocupada**: altere a variável `PORT` no `.env`.
- **Erro no Prisma**: rode novamente `npx prisma generate`.

---

## ✅ Resumo rápido

| Ambiente         | Comando                      | Endpoint local               |
| ---------------- | ---------------------------- | ---------------------------- |
| Local (host)     | `npm run dev`                | http://localhost:3333/api/v1 |
| Docker Compose   | `docker compose up`          | http://localhost:3333/api/v1 |

---

## 📄 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se livre para usar, modificar e distribuir conforme necessário.

---

## ✉️ Contato

Desenvolvido por **Felipe Gomes**  
📧 [GitHub - f3gomes](https://github.com/f3gomes)
