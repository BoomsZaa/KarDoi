module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: "Ping Test Commands",
    async execute(message, args, cmd, client, Discord) {
        message.reply('Calculating ping. . .').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            message.reply(`Bot Latency: ${ping}, API Latency: ${client.ws.ping}`)
        })
    }
}