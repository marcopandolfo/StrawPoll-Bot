import fetch, { Response } from 'node-fetch';

function sendVote(url: string, agent: any, formData: string, id: number, protection: boolean): void {
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		agent: protection ? agent : null,
		body: formData
	})
	.then(() => {
		console.log(`[${String(id)}]: Vote sended!`);
	})
	.catch(() => {
		console.log(`[${String(id)}]: Error sending the vote!`);
	});
}

export default sendVote;