export interface PixCreateResponse {
  "success": boolean,
  "data": {
    "payment_id": string,
    "external_id": string,
    "amount": number,
    "status": string,
    "qr_code": string,
    "qr_image_url": string,
    "expires_at": string,
    "created_at": string
  }
}

export interface PixStatusResponse {
  "success": boolean,
  "data": {
    "payment_id": string,
    "external_id": string,
    "amount": number,
    "status": string,
    "customer_name": string,
    "customer_cpf": string,
    "customer_phone": string,
    "created_at": string,
    "updated_at": string
  }
}

export interface PixDetailsResponse {
  "success": boolean,
  "data": {
    "payment_id": string,
    "external_id": string,
    "amount": number,
    "status": string,
    "customer_name": string,
    "customer_cpf": string,
    "customer_phone": string,
    "customer_address": string,
    "description": string,
    "qr_code": string,
    "qr_image_url": string,
    "created_at": string,
    "updated_at": string,
    "expires_at": string
  }
}