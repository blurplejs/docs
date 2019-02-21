# Getting Started

::: warning
This Discord Gateway is written in TypeScript and as such runs in a node.js context by default. If you want to use them in a different, please refer to the section on [other languages]().
:::

## Installation
Installation into your node.js project is as easy as running

```
npm install --save-dev @blurple/testing
```

## Starting up the server

::: tip
Internally we use [mocha](https://mochajs.org) as our test runner. Therefore the examples in this documentation will always make use of mocha and [chai](https://www.chaijs.com/) as an assertion library. The Gateway is not at all restricted to a certain test runner however, so you may use whichever runner you prefer.
:::

```js
import { FakeDiscordGateway } from '@blurple/testing'

let gateway

before(() => {
    gateway = new FakeDiscordGateway()
    gateway.start()
})

after(() => {
    gateway.stop()
})
```
