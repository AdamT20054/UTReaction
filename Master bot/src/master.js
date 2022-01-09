/** @format */

console.clear();
const { id: coinID } = require("./Data/config.json");

const Client = require("./Structures/Client.js");

const client = new Client(`${coinID}`, { presence: { status: 'dnd' } });





// .start apparently 

client.start(config.token);