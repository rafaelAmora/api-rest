# API REST com Node.js

Minha primeira API REST, desenvolvida para aprender os fundamentos de Node.js com Express. O projeto explora roteamento, middlewares, validação de dados e tratamento de erros.

## Stack

- **Node.js** com **TypeScript**
- **Express**
- **Zod** para validação de entrada

## Pré-requisitos

- Node.js 18+

## Instalação

```bash
git clone https://github.com/rafaelAmora/api-rest.git
cd api-rest
npm install
npm run dev
```

O servidor sobe na porta `3333`.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/products?page=1&limit=10` | Lista produtos com paginação |
| `POST` | `/products` | Cria um novo produto |

**Body para criação:**
```json
{
  "name": "Nome do produto",
  "price": 99.90
}
```

## Conceitos praticados

- Roteamento com Express Router
- Middlewares locais e globais
- Validação com Zod
- Tratamento de erros com classe `AppError`
- Extensão da interface `Request` do Express via `declaration merging`
