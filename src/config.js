require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'ODEzODE3OTcwMDQ4MTA2NTY3.YDU1DA.KBWT5LOdWLvXp3eebn-TRs0R', // your discord bot token
  prefix: process.env.PREFIX || '?', // bot prefix
  ownerID: process.env.OWNERID || ['799756254255906816'], //your discord id
  SpotifyID: process.env.SPOTIFYID || '41c7f9afa63a4e69b91ccf8eebb6a887', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || '2e31afcbd1754e95951541c3c4c93bce', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://ete:papatito@cluster0.zz5be.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || '#3366ff', // embed colour
  logs: process.env.LOGS || '900170677842243644', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/unidrogos',
    invite: process.env.INVITE || 'https://discord.gg/unidrogos',
    vote: process.env.VOTE || 'https://discord.gg/unidrogos',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/966675680907657256/967789748699668480/flat-landscape-lake-sunset-deer-wallpaper-preview.jpg'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lavalink-coders.ml:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'coders',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
