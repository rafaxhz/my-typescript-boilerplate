import { ChatInputCommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export abstract class Ping {
  @Slash({
    name: "ping",
    description: "Return with Client Ping!",
    dmPermission: true,
  })
  async Handler(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply({ ephemeral: true });

    await interaction.editReply({
      content: `${interaction.client.ws.ping}ms!`,
    });
  }
}
