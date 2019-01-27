import botPoll from '../src/index';

// False for no protection (no duplication checking) (no proxies/socks required)
botPoll('http://www.strawpoll.me/15100521', 1, false, null, 5000);