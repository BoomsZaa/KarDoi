module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: "Ping Test Commands",
    async execute(message, args, cmd, client, Discord) {
        message.channel.send('มึงคิดว่ากูฉลาดมากหรือไง!');
    }
}