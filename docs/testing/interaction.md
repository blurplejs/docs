---
sidebarDepth: 2
---

# Interacting with the Gateway

Starting up a WebSocket server is easy enough, but also doesn't do anything useful for us just yet. For proper tests we want to interact with the server, create new models with certain data, trigger events (such as a user sending a message to a channel) and so forth.

## Creating Models
The Gateway is connected to a store, which you can manipulate whenever you need to. A good idea for many tests is to seed the store, which generates a bunch of random entries for your bot to interact with. Keep in mind that the server does not automatically seed the store, so if you want to use the demo data, you are responsible for seeding it.

```js
import { storage } from '@blurple/gateway'

storage.seed()

// Alternative specifying a seed so that your tests become predictable
// by always creating the same data
storage.seed(6472421)
```

::: warning
Whenever you call `storage.seed` it will remove all of its previous entries. If you add any models to the storage before seeding it, they will be gone afterwards.
:::

### Get random entities
If you need to get hold of a random object of certain type, you can use the storage's `random` method, which will return you a random entry it has stored with the given type:

```js
import { storage } from '@blurple/testing'

let user = storage.random('user')
console.log(user.username)
```

### Using the factory
Internally `storage.seed` uses its `factory` method, which generates a given number of random entries. When creating them, an optional constructor method is called that will override any random data they created themselves.

Say you need five text channels in the same guild:

```js
import { storage } from '@blurple/testing'

let guild = storage.random('guild')
storage.factory('channel', 5).create(() => ({
    'type' => 'text',
    'guild' => guild.id
}))
```
