const OpenAI = require("openai");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
require("dotenv").config();

const client = new Client({
  authStrategy: new LocalAuth(),
});

const openai = new OpenAI({
  baseUrl: "https://openrouter.ai/api/v1",
  apiKey: process.env.API_KEY,
  defaultHeaders: { "Content-Type": "application/json" },
});

const askAI = async (query) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [{ role: "user", content: query }],
      stream: false,
    });
    let content = completion.choices[0].message.content;
    if (typeof content === "string") {
      content = content.replace(/<think>[\s\S]*<\/think>/gi, "");
      return content.trim();
    } else {
      console.error("Unexpected content type:", typeof content);
      return "Maaf, terjadi kesalahan saat menghubungi AI.";
    }
  } catch (error) {
    console.error(error);
    return "Maaf, terjadi kesalahan saat menghubungi AI.";
  }
};

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
client.on("authenticated", () => console.log("WhatsApp bot Authenticated!"));
client.on("ready", () => console.log("WhatsApp bot Ready!"));
client.on("message", async (message) => {
  const messageBody = message.body.trim().toLocaleLowerCase();

  if (messageBody.startsWith("/ai ")) {
    const query = message.body.substring(4).trim();
    const response = await askAI(query);
    message.reply(response);
  }
});

client.initialize();
