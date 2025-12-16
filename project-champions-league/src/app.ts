import express from "express";
import routes from "./routes";
import cors from "cors";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", routes);
  app.use(cors());

  /*
  Exemplo de configuração de CORS
    const corsOptions = {
      origin: "http:localhost:3000",
      methods: ["GET"],
    };
  */
  return app;
}

export default createApp;
