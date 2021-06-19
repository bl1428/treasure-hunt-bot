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
    // Prevent bot from responding to itself and other bots
    if (msg.author.bot) {
        return;
    }

    // !dm command
    if (msg.content.startsWith('!dm')) {
        let dmContent = `Hi, ${msg.member.displayName}! Please enter your answer.`;
        msg.author.send(dmContent);
    }

    // !help command
    if (msg.content.startsWith('!help')) {
        let messageContent = `DM me your answer!\nFor convenience, you can use \`!dm\` to command me to DM you.`;
        msg.channel.send(messageContent);
    }

    // DM responses
    if (msg.channel.type == 'dm') {
        let correctAnswers = config.correctAnswers;
        let dmContent = config.missResponse;

        if (msg.content in correctAnswers) {
            dmContent = correctAnswers[msg.content];
        }
        msg.reply(dmContent);
    }
});

client.login(config.botToken);

