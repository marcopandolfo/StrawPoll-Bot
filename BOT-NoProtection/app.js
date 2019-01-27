const botPoll = require('strawpoll-bots').default;
console.log("Iniciando bot :)");

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.me/17311241', 1, false, null, 2000);