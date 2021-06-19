# treasure-hunt-bot
This is a Discord bot which responds to DMs with set responses. Developed & tested on Windows 10.

## Requirements
- Node.js >= 14.17.1

## Configuration options
- `botToken`: The bot's OAuth2 token
- `missResponse`: The bot's response to incorrect answers
- `correctAnswers`: A table (dictionary) of correct answers and the bot's corresponding responses

## Commands
- `!dm`: Commands the bot to direct message you.
- `!help`: Display help message.

## Running the bot
1. Open command prompt or PowerShell in this repo's root directory
1. (First time only) Run `npm install`
1. Navigate to `\script` directory
1. Run with `node index.js`