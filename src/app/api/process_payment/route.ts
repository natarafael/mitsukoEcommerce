import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const url = "https://api.mercadopago.com/v1/payments";
  const token =
    "Bearer TEST-654944833329995-120612-eebb436293c4d178ae1587549b30b19c-154352529";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log("dataResponse", data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
