// ngrok http 3000
// copy endpoint url + /api/webhooks
// setup in clerk
// docker attach --sig-proxy=false nextjs
// test endpoint
// start using

import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Bad Request - no svix headers");
    return new Response("Bad Request", {
      status: 400,
    });
  }

  let body;
  try {
    body = JSON.stringify(await req.json());
  } catch (error) {
    console.error("Bad Request - malformed payload");
    return new Response("Bad Request", {
      status: 400,
    });
  }

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Bad Request - error verifying webhook", err);
    return new Response("Bad Request", {
      status: 400,
    });
  }

  // Get the ID and type
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, created_at } = evt.data;

    try {
      await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses[0].email_address,
          picture_url: image_url,
          createdAt: new Date(created_at),
        },
      });
    } catch (error) {
      console.error(error, evt.data);
      return new Response("Internal Server Error", { status: 500 });
    }

    return new Response("Success", { status: 200 });
  }

  console.error("Not Found - event type unknown", eventType);
  return new Response("Not Found", { status: 404 });
}
