export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const fileUrl = `${url.origin}/llms.txt`;
  const res = await fetch(fileUrl);
  const fileContent = await res.text();

  return new Response(fileContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
