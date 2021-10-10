module.exports = {
    name: 'help',
    aliases: ['h'],
    description: "Embeds!",
    async execute(message, args, cmd, client, Discord) {
        const newEmbeds = new Discord.MessageEmbed()
        .setColor('#fc00ff')
        .setTitle('Commands')
        .setDescription('คำสั่งที่สามารถใช้ได้')
        .addFields(
            {name: 'All Commands', value: '`help`,`play`,`skip`,`stop`,`leave`,`ping`'},
        )
        .setFooter('มึงคิดว่ากูฉลาดมากหรือไง');

        message.channel.send(newEmbeds);
    }
}