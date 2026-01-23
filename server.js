import express from "express";
import { createRequestHandler } from "@react-router/express";

const app = express();

app.use(express.static("build/client"));

app.all(
  "*",
  createRequestHandler({
    build: () => import("./build/server/index.js"),
  })
);

app.listen(3000, () => {
  console.log("SSR server running on http://localhost:3000");
});