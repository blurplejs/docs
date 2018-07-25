# Example
This is a quick

## package.json
<<< @/docs/example/package.json{2,5,8}
The `package.json` can be extremely simple. Since this is a public plugin, it needs a `name`, `description` and `version` field. 

In addition we require the `@blurple/extension` library so we can make use of the Extension API.

## index.js
<<< @/docs/example/index.js
Now, whenever someone writes `!compliment` in any channel that your bot has access to, your bot will respond to that user with a random compliment pulled from a list of compliments.

::: warning
Although you currently have to hard-code your command prefix, this won't always be the case. We intend to allow for prefix defaults, customizations per bot and perhaps even per-server/bot customizations.
:::
