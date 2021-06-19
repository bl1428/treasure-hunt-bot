const Discord = require('discord.js');
const client = new Discord.Client();

// parse config
const fs = require('fs');
const toml = require('toml');
const config = toml.parse(fs.readFileSync('./config.toml', 'utf-8'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Handler for incoming messages
client.on('message', async msg => {
    // prevent bot from responding to itself and other bots
    if (msg.author.bot) {
        return;
    }
    // hello world
    if (msg.content.startsWith('!hello')) {
        msg.reply('world!');
    }
});

client.login(config.botToken);