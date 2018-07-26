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

When registering commands you have to specify the command name and optionally a list of arguments. The following ways of declaring arguments are supported:
- required argument (`{foo}`)
- optional argument (`{foo?}`)
- optional argument with a default value (`{foo=bar}`)
- variadic arguments (`{foo*}`), i.e. everything that comes after is compressed into a list

Arguments are parsed positionally, so if the first argument is `{foo}`, then the first word the user sends as an argument is going to be used for `foo`.

::: warning
Required arguments always have to come first and variadic arguments last. There can only ever be at most one variadic argument per command.
:::

```js
// The command signature ...
'example {a} {b} {c?} {d=test} {e*}'

// With input:
'example foo bar'
// =>
{
    a: 'foo',
    b: 'bar',
    c: null,
    d: 'test',
    e: []
}

// With input:
'example foo bar soup noodles cheese cheddar parmesan'
// =>
{
    a: 'foo',
    b: 'bar',
    c: 'soup',
    d: 'noodles',
    e: ['cheese', 'cheddar', 'parmesan']
}
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
