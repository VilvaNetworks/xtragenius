import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "llms.txt");
  const fileContent = await fs.readFile(filePath, "utf8");

  return new Response(fileContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
