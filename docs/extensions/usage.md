# Usage

## Registering Commands
```js
register (bot) {
    bot.command('users', this.getAllUsers)
    bot.command('roles [username]', this.getRoles)
}
```

::: warning
There is no need to bind the context of your command handlers via `.bind(this)`. This is automatically done for you by the extension API. However, this also means that you can't bind the `this` context to something else.
:::