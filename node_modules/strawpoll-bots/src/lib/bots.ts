import * as SocksProxyAgent from 'socks-proxy-agent';
import { readFileSync, existsSync } from 'fs';
import { stringify } from 'querystring';
import getData from './getData';
import sendVote from './sendVote';

function botPoll(url: string, option: number, protection: boolean, socksFilePath?: string, amount?: number): void {
	if(!url || !url.includes('strawpoll.me')) throw new Error('Invalid poll url!');
	if(protection) if(!socksFilePath || !existsSync(socksFilePath)) throw new Error('Invalid socks file path!');
	const socks: string[] = protection ? readFileSync(socksFilePath, 'utf8').trim().split('\n') : null;
	if(protection)
		for(const sock of socks){
			const agent: any = new SocksProxyAgent(`socks://${sock}`);
			const id: number = socks.indexOf(sock);
			getData(url, agent, protection)
			.then(data => {
				const formData: string = stringify({
					'security-token': data.secToken,
					[data.authToken]: '',
					options: data.options[option]
				});
				sendVote(url, agent, formData, id, protection);
			})
			.catch(() => {
				console.log(`[${String(id)}]: Error fetching the poll data!`);
			});
		}
	else
		for(let i = 0; i < amount; i++){
			const id: number = i;
			getData(url, null, protection)
			.then(data => {
				const formData: string = stringify({
					'security-token': data.secToken,
					[data.authToken]: '',
					options: data.options[option]
				});
				sendVote(url, null, formData, id, protection);
			})
			.catch(() => {
				console.log(`[${String(id)}]: Error fetching the poll data!`);
			});
		}
}

export default botPoll;