import express from "express";
import config from "./config";
import cors from "cors";
import { corsOptions } from "./config/cors";

import v1Routes from "./routes/v1/index";

const app = express();

app.use(cors(corsOptions));

(async () => {
  try {
    app.use("/api/v1", v1Routes);

    app.listen(config.PORT, () => {
      console.log(`Server is running on port http://localhost:${config.PORT}/api/v1/`);
    });
  } catch (error) {
    console.log("Failed to start the server", error);
    if (config.NODE_ENV === "production") {
      process.exit(1);
    }
  }
})();

export default app;