import { PixCreateResponse, PixStatusResponse, PixDetailsResponse} from "./types";
import axios from "axios";

interface PixCreateParams {
  amount: number;
  receiver_name?: string;
  receiver_cpf: string;
  receiver_email?: string;
  receiver_phone?: string;
  receiver_address?: string;
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
    const { amount, receiver_name, receiver_cpf , receiver_email, receiver_phone, receiver_address, external_id, description, webhook_url } = params;

    if (!amount) {
      throw new Error("Amount is required");
    }

    if (!receiver_cpf) {
      throw new Error("Receiver CPF is required");
    }

    try {
      const response = await axios.post(`${this.config.apiBase}/payment/create`, { amount, receiver_name, receiver_cpf , receiver_email, receiver_phone, receiver_address, external_id, description, webhook_url }, {
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
