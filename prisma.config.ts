import { defineConfig } from "prisma/config";
import * as fs from "fs";
import * as path from "path";

// Load .env.local or .env for Prisma CLI
function getDatabaseUrl(): string | undefined {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  for (const file of [".env.local", ".env"]) {
    const filePath = path.resolve(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const match = content.match(/^DATABASE_URL\s*=\s*["']?([^"'\r\n]+)["']?/m);
      if (match && match[1]) {
        process.env.DATABASE_URL = match[1].trim();
        return process.env.DATABASE_URL;
      }
    }
  }
  return undefined;
}

const dbUrl = getDatabaseUrl();

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: dbUrl,
  },
});

