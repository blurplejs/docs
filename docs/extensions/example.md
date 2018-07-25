# Example
This is a quick example of a usable bot that can be embedded in a runtime as-is.

## package.json
<<< @/docs/example/package.json{2,5,8}
Since this is a public package the `name` and `version` fields are required. The `main` field needs to point to a file that exports _only_ the extension you want to expose to blurple.js.

For this extension we require the `@blurple/extension` library so we can make use of the Extension API and a request library to

## index.js
<<< @/docs/example/index.js
Now, whenever someone writes `!compliment` in any channel that your bot has access to, your bot will respond to that user with a random compliment pulled from an external list of compliments.

::: warning
Although you currently have to hard-code your command prefix, this won't always be the case. We intend to allow for prefix defaults, customizations per bot and perhaps even per-server/bot customizations.
:::
