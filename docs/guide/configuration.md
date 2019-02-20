# Configuration

To configure your runtime, all you need is a `blurple.json` alongside your existing `package.json`. The following can serve as an example configuration.

```json
{
    "bot-1": {
        "token": "xAABBCCDDEEFFGG...",
        "owner": "DiscordUser#5629",
        "extensions": [
            "@blurple/example",
            "custom-local-bot-extension",
            [
                "./src/anotherExtension",
                {
                    "parameter-a": "some-value",
                    "parameter-b": true
                }
            ]
        ]
    }
}
```
In the example above three extension are enabled for the bot: `@blurple/example`, `custom-local-bot-extension` and `./src/anotherExtension`. The prior two do not require any additional configuration and thus can be included as is. The third extension however requires you to set some parameters so it can work slightly different on a per-bot basis.

When you have an extension that you wish to customize, instead of specifying just the name of the extension, you specify an array whose first element is the name of the extension and whose second element is an object containing your customizations.

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

## Webhooks
Webhooks are an easy way to respond to events coming from an external service besides Discord. For instance if you want to link your website users with their Discord accounts, you can call the webhook once the user has registered to make the bot greet him via a direct message.

To enable webhooks you need to create a `webhook.json` in the same directory as your `blurple.json`.

```json
{
    "port": "8083",
    "ssl": {
        "key": "/path/to/privatekey.pem",
        "cert": "/path/to/certificate.pem"
    }
}
```

`port` is the only required field of this configuration file. This specifies the port your bot is listening to. Default ports are 80 for HTTP and 443 for HTTPS. Make sure other applications aren't also using this port.

If you want to enable HTTPS, you need to specify the `ssl` key with a path to your certificates private key (`key`) and the certificate itself (`cert`).
