const request = require('request')

request({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 'w0y47wrn1b9muhq25g249nnxk3iipk',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}, (error, response, body) => {
  const data = JSON.parse(body)
  for (let i = 0; i < data.top.length; i++) {
    console.log(`${data.top[i].viewers} ${data.top[i].game.name}`)
  }
})
