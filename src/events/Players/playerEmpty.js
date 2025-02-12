const { MessageEmbed } = require('discord.js');
const db = require("../../schema/setup");

module.exports = {
  name: 'playerEmpty',
  run: async (client, player) => {

    let guild = client.guilds.cache.get(player.guild);
    if (!guild) return;
    const data = await db.findOne({ Guild: guild.id });
    if (!data) return;
    let channel = guild.channels.cache.get(data.Channel);
    if (!channel) return;

    let message;

    try {

      message = await channel.messages.fetch(data.Message, { cache: true });

    } catch (e) { };

    if (!message) return;
    await message.edit({ embeds: [new MessageEmbed().setColor(client.embedColor).setTitle(`Nothing playing right now in this server!`).setDescription(`[Invite](${client.config.links.invite}) - [Support Server](${client.config.links.support})`).setImage(client.config.links.bg)] }).catch(() => { });
    if (player.data.get('message') && !player.data.get('message').deleted) player.data.get('message').delete().catch(() => null);
    const TwoFourSeven = player.data.get('247');
    if (TwoFourSeven) {
      return client.channels.cache.get(player.text)?.send({
        embeds: [
          new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription('Queue ended. 24/7 is enable i am not Leaving the voice channel.')
            .setTimestamp(),
        ],
      });
    } else if (!TwoFourSeven)
      client.channels.cache.get(player.text)?.send({
        embeds: [
          new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription('Queue ended. 24/7 is disable i am Leaving the voice channel.')
            .setTimestamp(),
        ],
      });
    player.destroy()
  },
};
