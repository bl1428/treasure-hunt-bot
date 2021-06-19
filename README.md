# treasure-hunt-bot
This is a Discord bot for treasure hunt/ARGs which responds to DMs and optionally grants a role as a reward for correct answers.

Developed & tested on Windows 10.

## Requirements
- Node.js >= 14.17.1
- Discord Bot configured with Administrator permissions and both Presence and Members intents

## Configuration options
- `botToken`: The bot's OAuth2 token.
- `guildId`: The ID of the guild (server) that the bot belongs to. This is the server on which the reward role will be granted (if configured). If no `rewardRole` is configured, this is not required.
- `missResponse`: The bot's response to incorrect answers.
- `rewardRole`: The role to grant as a reward for a correct answer. Default value is empty string, which disables role granting.
- `correctAnswers`: A table (dictionary) of correct answers and the bot's corresponding responses.

## Commands
- `!dm`: Commands the bot to direct message you.
- `!help`: Display help message.

## Running the bot
1. Open command prompt or PowerShell in this repo's root directory
1. (First time only) Run `npm install`
1. Navigate to `\script` directory
1. Run with `node index.js`