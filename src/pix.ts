import { PixCreateResponse, PixStatusResponse, PixDetailsResponse} from "./types";
import axios from "axios";

interface PixCreateParams {
  amount: number;
  customer_name?: string;
  customer_cpf?: string;
  customer_email?: string;
  customer_phone?: string;
  customer_address?: string;
  external_id?: string;
  description?: string;
  webhook_url?: string;
}

interface PixStatusParams {
  payment_id: string;
}


export class Pix {
  private config: { apiKey: string; apiBase: string; };

  constructor(config: { apiKey: string; apiBase: string; }) {
    this.config = config;
  }

  public async create(params: PixCreateParams): Promise<PixCreateResponse> {
    const { amount, customer_name, customer_cpf, customer_email, customer_phone, customer_address, external_id, description, webhook_url } = params;

    if (!amount) {
      throw new Error("Amount is required");
    }

    try {
      const response = await axios.post(`${this.config.apiBase}/payment/create`, { amount, customer_name, customer_cpf, customer_email, customer_phone, customer_address, external_id, description, webhook_url }, {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": `${this.config.apiKey}`,
        }
      });


      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }

  public async details(params: PixStatusParams): Promise<PixDetailsResponse> {
    const { payment_id } = params;

    if (!payment_id) {
      throw new Error("Payment ID is required");
    }

    try {
      const response = await axios.get(`${this.config.apiBase}/payment/${payment_id}/`, {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": `${this.config.apiKey}`,
        }
      });


      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }

  public async status(params: PixStatusParams): Promise<PixStatusResponse> {
    const { payment_id } = params;

    if (!payment_id) {
      throw new Error("Payment ID is required");
    }

    try {
      const response = await axios.get(`${this.config.apiBase}/payment/${payment_id}/status`, {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": `${this.config.apiKey}`,
        }
      });


      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }

 


}
