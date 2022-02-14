<br/>
<p align="center">
  <h3 align="center">UTReaction bot</h3>

  <p align="center">
    A bot to use user tokens to react to messages within a Discord Server
    <br/>
    <br/>
    <a href="https://github.com/AdamT20054/"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

## Disclaimer:
This program is built for example purposes, it should not under any circumstance be used on Discord or it's related services. You are responsible for the use of this program and the author bares no responsibility.

## Built With

Built with Discord.js V13, Discord.js-selfbot @V12 and fs - edited and configured with TS to all work together.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Once you've obtained the node_modules file from the proton drive, and pasted it into the same folder where `package.json` is, `cd` into the UTbot folder

Download the node_modules folder here: https://drive.protonmail.com/urls/VZD37K9ZVW#XR0hBb5LAhG7
Copy that folder to the outmost folder (where `package.json` and `package-lock.json` are located)

```sh
cd src/UTbot
```

### Installation

1. Install the latest version of Node.js from `https://nodejs.org/en/`

2. Paste the bot tokens you want to use into `tokens.txt`, located inside the UTbot folder

3. In the command line, type:
```sh
node .
```
4. The bot should come online, followed shortly by all the user token accounts logging in.

5. Run the command:
```sh
!!react [Channel ID] [Message ID] [Unicode emoji] [num of bots]
```



## Common problems:

1) The bots wont react:
Make sure the bots are online when the message you want reacting to was sent, make sure the master bot can see your !!react message.




