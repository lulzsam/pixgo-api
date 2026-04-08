# PixGo 💸

Uma biblioteca simples e moderna para integração com pagamentos via Pix.

## 📦 Instalação

```bash
npm install pixgo-api
# ou
yarn add pixgo-api
```

## 🔒 Autenticação

```typescript
import { PixGo } from "pixgo-api"

const pixgo = new PixGo({ apiKey: "SUA_API_KEY_AQUI" })
```

## 💰 Criar um pagamento Pix

```typescript
pixgo.pix.create({ 
  amount: 10,
  webhook_url: "https://seusite.com/webhook/pixgo", // opcional
  customer_address: "Rua das Flores, 123, São Paulo, SP, 01234-567", // opcional
  customer_cpf: "12345678901", // opcional
  customer_email: "cliente@example.com", // opcional
  customer_name: "João Silva", // opcional
  customer_phone: "11999999999", // opcional
  description: "Pagamento de produto", // opcional
  external_id: "pedido_12345" // opcional
})
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.error(err)
})
```

## 🔎 Consultar status do pagamento

```typescript
pixgo.pix.status({ payment_id: "019d6f17d7274b38c5f487c60a41aa" })
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.error(err)
})
```

## 📄 Detalhes do pagamento

```typescript
pixgo.pix.details({ payment_id: "019d6f17d7274b38c5f487c60a41aa" })
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.error(err)
})
```
