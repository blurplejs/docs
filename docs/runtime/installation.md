# Installation

blurple is designed in a way that allows even non-developers to easily set up and host one or more discord bots (_as long as they're a little tech-savvy_). Still, there are some 

### Requirements
- [Node.js](https://nodejs.org/en/) 8.0 or newer
- npm (usually included with Node.js)

### Setup
Create a `package.json` in an empty directory where your bots will live. The `package.json` needs to contain at minimum the `@blurple/runtime` dependency and optionally a start script and other dependencies (e.g. blurple bot extensions).

```json
{
    "scripts": {
        "start": "blurple"
    },
    "dependencies": {
        "@blurple/runtime": "~1.0",
        "@blurple/example": "latest",
        "custom-local-bot-extension": "file:../bot"
    }
}
```

Once your `package.json` is saved, you can run `npm install` to install the runtime and all of your desired bot extensions.
