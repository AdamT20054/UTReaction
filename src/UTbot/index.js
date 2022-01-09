// @ts-check

/**
 * Login with a token, react to the [MessageID] with the [Emoji] and then logout. It'll then do i = i+1
 * It'll then login with a new one and do the same until i == [Num of reactions]
 * 
 * 
 * 
 * 
 * They're coming from tokens.txt, going to store them as an array yea
 */


//const { Message } = require('discord.js');
const Discord = require('discord.js-selfbot');
const fs = require("fs");
const Master = require('../Master/master');

//const tokenfile = fs.readFileSync("tokens.txt").toString('utf-8');
//const tokens = tokenfile.split("\n").toString("utf-8")

const readFileLines = filename => fs.readFileSync(filename)
   .toString()
   .replace(/\r/g, '')
   .split('\n');

const tokens = readFileLines('tokens.txt');


const { string } = require('zod');

const master = new Master("OTI5ODQ0MjYzNDU2NTA1ODk3.YdtO9A.KpLnFJ5Q3Y_jt7UzMRu_1Nhz18c", '!!', tokens);

master.once('ready', () => console.log(`Master ${master.user.tag} is online`));