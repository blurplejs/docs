# Testing

## Introduction
I often found myself writing personal Discord bots that, although small in scope, were complicated enough to make it difficult to always replicate the exact environment needed to test the bit of functionality I was developing at the time. If a bot does something when three people join a voice channel you most likely need three people to help you in testing this exact functionality. There's many scenarios that are hard or take a long time to replicate just so I can work on one piece of my bot.

In other areas of work I often use unit and integration testing for these sorts of things, but with Discord bots that apparently has never been easily doable. I found tons of requests of developers looking for testing tools for writing Discord bots, but there seems to be nothing out there that I could find, which is why I decided to start my own little library that intends to fill that gap.

## Specifics
If Discord Bots used Discord's REST API it would be easy enough to test them. However Discord Bots usually require real-time updates and as such connect to Discord's Gateway API which works via WebSockets. This API is well enough documented, that we are able to replicate its expected behaviour. Therefore, the testing utilities start up their own local WebSocket server which you can interact with exactly like you would interact with the official Discord Gateway.

In addition we provide tons of helper functions that allow you to add new entities to the server, trigger events and more. Your client that is connected to the WebSocket API will always receive the same events as it would from Discord, making for a very easily reproducible environment.

For more information, please refer to the [GitHub repository](https://github.com/blurplejs/gateway).