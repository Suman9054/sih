import { Hono } from "hono";
import { auth } from "./utils/auth";
import type { AuthType } from "./utils/auth";
import { cors } from "hono/cors";

const app = new Hono<{Bindings: AuthType }>();

app.use(
  "/*",
  cors({
    origin: "http://localhost:8080",
    credentials: true,
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);



app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));


export default app;