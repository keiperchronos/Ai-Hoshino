const { EmbedBuilder } = require("discord.js");

module.exports = class ClientEmbed extends EmbedBuilder {
  constructor(user, data = {}) {
    super(data);

    this.setColor(process.env.COLOR_EMBED);

    if (user)
      this.setFooter({
        text: user.globalName || user.username,
        iconURL: user.displayAvatarURL({ dynamic: true }),
      }).setThumbnail(
        user.displayAvatarURL({ dynamic: true, size: 2048, extension: "png" })
      );
  }
};
