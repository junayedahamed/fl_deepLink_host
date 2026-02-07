import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/.well-known/assetlinks.json", (req, res) => {
  res.sendFile(path.join(__dirname, "assetlinks.json"));
});

if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("http://localhost:3000/.well-known/assetlinks.json");
  });
}

export default app;
