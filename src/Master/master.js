/** @format */
// @ts-check

const { Client } = require('discord.js');
const UTBot = require('../UTbot/UTBot');

module.exports = class Master extends Client {
    /** @type {UTBot[]} */
    UTBots = [];

    /**
     * @param {string} prefix
     * @param {string} token
     * @param {string[]} tokens
     */
    constructor(token, prefix, tokens) {
        super({ intents: ['32767'] });

        this.prefix = prefix;

        tokens.forEach(async (token) => {
            const result = await UTBot.from(token);

            if (result.success)
                this.UTBots.push(result.value);
            else if (result.success === false)
                console.error(result.error);
        });

        this.on('messageCreate', message => { this.parseMessage(message); });

        this.login(token);
    }

    /**
     * @param {string} reactions
     */
    #validateReactions(reactions) {
        const asNumber = Number(reactions);

        return isNaN(asNumber) ? false : asNumber < 0 ? false : true;


    }

    /**
     * @param {import('discord.js').ClientEvents['message'][0]} message
     */
    async parseMessage(message) {
        const components = message.content.split(' ');
        const [command, channelID, messageID, emoji, reactions] = components;

        if (!command.startsWith(`${this.prefix}react`))
            return;

        if (!channelID)
            return message.channel.send('You must input a value for \`channelID\`').catch(function() {});

        if (!messageID)
            return message.channel.send('You must input a value for \`messageID\`').catch(function() {});

        if (!emoji)
            return message.channel.send('You must input a value for \`emoji\`').catch(function() {});

        if (!reactions)
            return message.channel.send('You must input a value for \`reactions\`').catch(function() {});

        if (!this.#validateReactions(reactions))
            return message.channel.send('Your input for \`reactions\` must be a positive integer').catch(function() {});

        for (const bot of this.UTBots.slice(0, Number(reactions))) {
            const result = await bot.react(channelID, messageID, emoji);

            if (result.success === false)
                console.error(result.error);
        }
    }
}