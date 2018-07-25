---
sidebarDepth: 3
---

# Setup
Generally you want to provide your bots with some base configuration and register some listeners and commands when it starts. This is what the `register` method is for, which receives a `BotCustomizer` as its only parameter.

## Commands
```js
register (bot) {
    bot.command('compliment').then(this.writeCompliment)
}
```
Registering commands is simple: Specify the command name and optionally a set of arguments that can be sent with it.

```js
// Optional argument ...
'compliment {user?}'

// Optional argument with a default value ...
'compliment {when=now}'

// List of arguments ...
'compliment {user*}'
// Only one argument list is allowed per command.
// Lists have to be the last argument.
```

### Synonyms
You can add synonyms to your commands by calling the `.synonym` method on it:

```js
bot.command('compliment')
    .then(this.writeCompliment)
    .synonym('spread some love')
    .synonym('please love me')
```

::: warning
Only your initial command can specify arguments. They are not allowed when adding synonyms to existing commands.
:::

### Command handler
Your command handler receives two arguments:
- The [`Message`][1] that was received
- The parsed list of arguments provided by the user

::: tip
There is no need to bind the context of your command handlers via `.bind(this)`. This is automatically done for you by the runtime. However, this also means that you can't bind the context to something else.
:::


[1]: https://discord.js.org/#/docs/main/stable/class/Message
