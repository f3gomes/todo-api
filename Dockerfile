FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

ENV PORT=3333
ENV NODE_ENV=development

EXPOSE 3333

CMD ["npx", "ts-node-dev", "--respawn", "src/server.ts"]
