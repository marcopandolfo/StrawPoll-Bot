# strawpoll-bots
A npm package for botting polls on strawpoll.me

## Features (Watch 'test' folder)
* Works on <b>IP Limitation Checking</b> polls (with socks proxies)
* Works on <b>No Limitation Checking</b> polls
* <b>Doesn't works with polls that have captcha protection</b>

## Installation
`npm i strawpoll-bots` | `yarn add strawpoll-bots`

### Parameters (Options) (Watch 'test' folder)
* <b>URL:</b> Poll url (eg: http://www.strawpoll.me/15100511)
* <b>Option ID:</b> For example 1st option id/value is 0 (starts from 0) then the 2nd option id/value is 1 etc...
* <b>Protection:</b> Set it to true if the poll uses ip limitation checking and false if the poll have no limitation checking
* <b>SocksFilePath (only if 'protection' is true):</b> Path to the socks list file
* <b>Amount (only if 'protection' is false):</b> Amount approx of the votes to the poll

## Usage
#### IP Limitation Checking Example
```javascript
const botPoll = require('strawpoll-bots').default;
const { join } = require('path');

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('http://www.strawpoll.me/15100511', 1, true, join(__dirname, 'socks.txt'));
```
#### No Limitation Checking Example
```javascript
const botPoll = require('strawpoll-bots').default;

// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('http://www.strawpoll.me/15100521', 1, false, null, 5000)
```

# License
[MIT license](http://en.wikipedia.org/wiki/MIT_License)