import { config } from "dotenv";

export function loadConfig() {
  config();
  return {
    lnd: {
      cert: process.env.LND_TLS_CERT_B64,
      macaroon: process.env.LND_MACAROON_B64,
      socket: process.env.LND_ADDRESS,
    },
  };
}
