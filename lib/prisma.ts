import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pool: Pool | undefined;
};

function createPrismaClient(): PrismaClient {
  let connectionString = process.env.DATABASE_URL;

  if (connectionString) {
    try {
      if (connectionString.includes("sslmode=require")) {
        connectionString = connectionString.replace("sslmode=require", "sslmode=verify-full");
      }
      const pool =
        globalForPrisma.pool ??
        new Pool({
          connectionString,
          ssl: { rejectUnauthorized: false },
        });
      if (process.env.NODE_ENV !== "production") {
        globalForPrisma.pool = pool;
      }
      const adapter = new PrismaPg(pool);
      return new PrismaClient({ adapter });
    } catch (e) {
      console.warn("Could not connect to PostgreSQL via PrismaPg:", e);
    }
  }

  // Safe fallback proxy when DATABASE_URL is not set yet in .env.local
  return new Proxy({} as PrismaClient, {
    get(_target, prop) {
      return new Proxy({} as any, {
        get(_subTarget, subProp) {
          return async (..._args: any[]) => {
            console.warn(`prisma.${String(prop)}.${String(subProp)} called, but DATABASE_URL is not configured in .env.local yet.`);
            return null;
          };
        },
      });
    },
  });
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}


