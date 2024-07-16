import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATA_BASE_URL,
  node_env :process.env.NODE_ENV
};
