import { ArgsOf, Client, Discord, On } from "discordx";

@Discord()
export abstract class InteractionCreate {
  @On({ event: "interactionCreate" })
  async Handle([i]: ArgsOf<"interactionCreate">, client: Client) {
    try {
      // Execute interaction
      client.executeInteraction(i);
    } catch (err: unknown) {
      if (i.isRepliable())
        switch (i.deferred || i.replied) {
          case true: {
            i.editReply("Falha ao executar essa interação...");
          }
          case false: {
            i.reply("Falha ao executar essa interação...");
          }
        }

      console.error("✕ Failed to run an interaction", err);
    }
  }
}
