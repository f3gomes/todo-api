import express from "express";
import config from "./config";
import cors from "cors";
import { corsOptions } from "./config/cors";

import v1Routes from "./routes/v1/index";
import { taskRouter } from "./routes/v1/task.route";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    app.use("/api/v1", v1Routes);
    app.use("/api/v1", taskRouter);

    app.listen(config.PORT, () => {
      console.log(
        `Server is running on port http://localhost:${config.PORT}/api/v1/`
      );
    });
  } catch (error) {
    console.log("Failed to start the server", error);
    if (config.NODE_ENV === "production") {
      process.exit(1);
    }
  }
})();

export default app;
