# fyAI-Whatsapp AI Chatbot

This project is a WhatsApp bot that uses OpenAI to respond to user queries. The bot is built using `whatsapp-web.js` and `openai` libraries.

## Prerequisites

- Node.js
- npm
- A WhatsApp account
- OpenAI API key

## Dependencies

- openai [(Read Documentation)](https://platform.openai.com/docs/api-reference/introduction)
- whatsapp-web.js [(Read Documentation)](https://docs.wwebjs.dev/)
- qrcode-terminal [(Read Documentation)](https://www.npmjs.com/package/qrcode-terminal)
- dotenv [(Read Documentation)](https://www.dotenv.org/docs/)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/fyrmnzia/fyAi-WhatsApp-AI-Chatbot.git
   cd whatsapp-ai-bot
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:

   ```env
   API_KEY=your_openai_api_key
   ```

## Usage

1. Start the bot:

   ```sh
   node server.js
   ```

2. Scan the QR code with your WhatsApp to authenticate the bot.

3. Send a message starting with `/ai ` followed by your query to the bot on WhatsApp.

## Project Structure

- [server.js](https://github.com/fyrmnzia/fyAi-WhatsApp-AI-Chatbot/blob/main/server.js): Main file that initializes the WhatsApp client and handles messages.
- [package.json](https://github.com/fyrmnzia/fyAi-WhatsApp-AI-Chatbot/blob/main/package.json): Project configuration and dependencies.

## Suggestion

start the bot by using `pm2` in the terminal, so that the bot is always active (the device must remain on and connected). [Get started with pm2](https://pm2.keymetrics.io/)

## Thank You

Thank you for using fyAI-WhatsApp AI Chatbot. I hope it helps you in your projects!
