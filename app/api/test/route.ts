// 这是nextjs后端接口，访问localhost:3000/api/test返回JSON对象{"test":"Hello"}
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ test: "Hello" });
}
