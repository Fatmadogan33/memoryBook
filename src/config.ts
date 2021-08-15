import dotenv from "dotenv";

dotenv.config();

class Config {
  public POOL_MIN = Number(process.env.DATABASE_POOL_MIN || "0");
  public POOL_MAX = Number(process.env.DATABASE_POOL_MAX || "10");
  public POSTGRES_DB = process.env.POSTGRES_DB || "memory";
  public POSTGRES_URL = process.env.POSTGRES_URL || "postgres://postgres:123@localhost:/memory";
  public PORT = parseInt(process.env.PG_PORT as string, 10) || 5432;
  public HOST = process.env.PG_HOST || "";
  public USERNAME = process.env.PG_USERNAME || "postgres";
  public PASSWORD = process.env.PG_PASSWORD || "123";

  constructor() {
    console.log("Database Config Loaded");
  }
}

export default new Config ();