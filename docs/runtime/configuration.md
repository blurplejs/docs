# Configuration

To configure your runtime, all you need is a `blurple.json` alongside your existing `package.json`. The following can serve as an example configuration.

```json
{
    "bot-1": {
        "token": "xAABBCCDDEEFFGG...",
        "owner": "DiscordUser#5629",
        "extensions": [
            "your-favorite-bot-extension",
            "custom-local-bot-extension",
            "./src/anotherExtension"
        ]
    }
}
```

## Options
### `token`
Your Discord bot's API Token.

::: tip
An API Token can be obtained by visiting the [Discord Developer Portal](https://discordapp.com/developers/applications). Create a new application (or select an existing one) and choose the menu item "Bot". Once your bot is set up, you can click "Copy" next to the "Token" headline.
:::

### `owner`
Every bot should have at least one owner. This field accepts either a single owner or an array of owners.

You can either use a user's name + discriminator (`DiscordUser#5326`) or a user's snowflake (unique&nbsp;ID). However, the latter is more difficult to obtain.

:::tip
If you want to specify multiple owners, you need to use the JSON array syntax: 
```json
"owner": ["DiscordUser#7342", "FriendlyHuman#6345"]
```
:::
