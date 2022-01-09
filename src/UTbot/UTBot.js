// @ts-check

const { Client, TextChannel, MessageReaction } = require('discord.js-selfbot');

/**
 * @template T
 * @typedef {object} success
 * @property {T} value
 * @property {true} success
 */

/**
 * @template {Error} E
 * @typedef {object} failure
 * @property {E} error
 * @property {false} success
 */

/**
 * @template [T = any]
 * @template {Error} [E = Error]
 * @typedef {success<T> | failure<E>} Result
 */

module.exports = class UTBot extends Client {
    /**
     * @param {string} token
     * @returns {Promise<Result<UTBot>>}
     */
    static async from(token) {
        const bot = new UTBot();

        bot.once('ready', () => console.log(`${bot.user.tag} is online`));

        const result = await bot.login(token).catch(err => err instanceof Error ? err : Error(err));

        return typeof result === 'string' ? { success: true, value: bot } : { success: false, error: result };
    }

    /**
     * @param {string} channelID
     * @param {string} messageID
     * @param {string} emoji
     * @returns {Promise<Result<MessageReaction>>}
     */
    async react(channelID, messageID, emoji) {
        const channel = await this.channels.fetch(channelID).catch(function() {});

        if (!channel)
            return { success: false, error: Error('Invalid Channel ID') };

        if (!(channel instanceof TextChannel))
            return { success: false, error: Error('Channel ID was not for a Text Channel') };

        const message = await channel.messages.fetch(messageID).catch(function() {});

        if (!message)
            return { success: false, error: Error('Invalid Message ID') };

        return new Promise((resolve) => {
            setTimeout(async () => {
                const reaction = await message.react(emoji).catch(function(error) { return `${error}` });

                resolve(typeof reaction !== 'string' ? { success: true, value: reaction } : { success: false, error: Error(reaction) });
            }, Math.floor(Math.random() * 5) * 1000);
        });
    }
}