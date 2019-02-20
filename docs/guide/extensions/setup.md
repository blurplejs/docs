---
sidebarDepth: 3
---

# Setup

Generally you want to provide your bots with some base configuration and register some listeners and commands when it starts. This is what the `register` method is for, which receives a `BotCustomizer` as its only parameter.

## Events
### Commands
```js
register (bot) {
    bot.command('compliment').call(this.writeCompliment)
}
```

To register a command, call the `.command(name)` method on the `BotCustomizer`. This will return a `CommandCustomizer` object,
which you can use to specify your command.

#### Handler
Like in the example above, `.call(this.writeCompliment)` registers the class method `writeCompliments` as this command's handler.

When a user calls the command, your handler is called with two arguments:
- The [`Message`][1] that was received
- The parsed list of arguments provided by the user

::: tip
There is no need to bind the context of your command handlers via `.bind(this)`. This is automatically done for you by the runtime. However, this also means that you can't bind the context to something else.
:::

#### Aliases
You can specify an infinite number of aliases with `.alias(name)` or `.synonym(name)`. If a different command already uses this alias, an exception is thrown.

#### Arguments
```js
register (bot) {
    bot.command('hello')
        .required('foo')
        .optional('bar')
        .optional('baz', 'name')
        .optional('boo', (message) => message.author.name)
        .remaining('others')
}
```

All arguments are positional. The order in which the arguments are parsed when the command is issued is the same that was used to specify them.

##### Required arguments
Required arguments are needed for the command to be executed correctly. If they are not provided by the issuer the bot will respond with a default error message.

Required arguments always have to come before any optional or the `remaining` arguments.

##### Optional arguments
Optional arguments can either have no default (`null`), a static value (`name`) or a function that takes the incoming message and returns the default value. In the example argument `boo` above, this would be the name of the issuer of the command.

##### Remaining (`variadic`) arguments
If you need the user to enter a list of things with arbitrary length, you can make use of variadic arguments. After all the previous arguments have been parsed, any remaining ones will be placed in an array for you.

There can only be one of these variadic arguments per command and it has to be specified as the last one.

::: tip
`.variadic(name)` is a synonym to `.remaining(name)`.
:::

### Terminal commands
The bot can respond to commands submitted via the blurple runtime too. The options are the same as for Discord commands, except:

- Default values for optional arguments cannot be functions
- The message the command handler receives is just a string, not a discord.js message

::: warning
A [handful of commands](/runtime/usage.md#commands) entered via the runtime are parsed directly by the runtime and therefore can't be used as command names.
:::

### Webhooks
```js
register (bot) {
    bot.webhook('/registered').call(this.welcomeUser)
}
```

Webhooks respond to `GET` requests by default. You may also call `.post()` on the webhook for it to respond to `POST` requests instead.

[1]: https://discord.js.org/#/docs/main/stable/class/Message
