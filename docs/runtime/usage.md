# Usage
The runtime is a local node.js dependency, which means that it will need to be contained in a directory with a basic `package.json`:

```json
{
    "scripts": {
        "start": "blurple"
    },
    "dependencies": {
        "@blurple/runtime": "~1.0",
        "your-favorite-bot-extension": "latest",
        "custom-local-bot-extension": "file:../bot"
    }
}
```

Once your `package.json` is saved, you can run `npm install` to install the runtime and all of your desired bot extensions.

## Configuration
To configure your runtime, all you need is a `blurple.json` with the following options:

```json
{
    "bot-1": {
        "api-key": "xAABBCCDDEEFFGG...",
        "extensions": [
            "your-favorite-bot-extension",
            "custom-local-bot-extension",
            "./src/anotherExtension"
        ]
    }
}
```

## Startup
All you need to do now to start up all your bots is to execute `npm run start`.
