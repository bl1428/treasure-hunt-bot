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
            dmContent = correctAnswers[msg.content];    // Set reply

            // If configured, grant reward role to message sender
            // This is a DM, so we must find the necessary guild context to accomplish this.
            if (config.rewardRole) {
                let guild = client.guilds.cache.get(config.guildId);    // Get the guild by ID
                let role = guild.roles.cache.find(role => role.name === config.rewardRole); // Get the role by name
                let member = guild.members.cache.find(member => member.id === msg.author.id);   // Get the guild member using msg sender's ID
                member.roles.add(role); // Finally, add the role
            }
        }

        msg.reply(dmContent);
    }
});

client.login(config.botToken);

