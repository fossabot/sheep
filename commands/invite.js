module.exports = {
	help: ()=> "Get the bot's invite",
	usage: ()=> [" - Gets an invite for the bot"],
	execute: async (bot, msg, args)=> {
		msg.channel.createMessage('You can invite me with this:\nhttps://discordapp.com/api/oauth2/authorize?client_id=585271178180952064&permissions=8&scope=bot');
	},
	alias: ['i', 'inv']
}