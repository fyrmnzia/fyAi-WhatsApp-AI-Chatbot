# fyAI-Whatsapp AI Chatbot

This project is a WhatsApp bot that uses OpenAI to respond to user queries. The bot is built using `whatsapp-web.js` and `openai` libraries.

## Prerequisites

- Node.js
- npm
- A WhatsApp account
- OpenAI API key

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/whatsapp-ai-bot.git
   cd whatsapp-ai-bot
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a [.env] file in the root directory and add your OpenAI API key:

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

- [server.js](http://_vscodecontentref_/1): Main file that initializes the WhatsApp client and handles messages.
- [package.json](http://_vscodecontentref_/2): Project configuration and dependencies.
