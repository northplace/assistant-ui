import { OpenAI } from "openai";
import { StreamingTextResponse } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Parse the request body
  const { messages } = await req.json();

  // Create a streaming response
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    stream: true,
  });

  // Return the streaming response
  return new StreamingTextResponse(response.toReadableStream());
}