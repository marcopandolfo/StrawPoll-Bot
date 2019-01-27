import botPoll from '../src/index';
import { join } from 'path';

// True for protection (ip duplication checking) (proxies/socks required)
botPoll('http://www.strawpoll.me/15100511', 1, true, join(__dirname, 'socks.txt'));