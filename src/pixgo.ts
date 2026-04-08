import { Pix } from "./pix";

export interface PixGoConfig {
  apiKey: string;
}

class InternalConfig {
  public apiKey: string;
  public apiBase: string;

  constructor(config: PixGoConfig) {
    this.apiKey = config.apiKey;
    this.apiBase = "https://pixgo.org/api/v1"
  }
}

export class PixGo {
  private config: InternalConfig;
  public pix: Pix;

  constructor(config: PixGoConfig) {
    if (!config.apiKey) {
      throw new Error("API Key is required");
    }

    this.config = new InternalConfig(config);
    this.pix = new Pix(this.config);
  
  }
}
