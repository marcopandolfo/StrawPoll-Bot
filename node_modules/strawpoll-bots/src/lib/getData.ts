import fetch, { Response } from 'node-fetch';

interface IData {
	secToken: string;
	authToken: string;
	options: string[];
}

async function getData(url: string, agent: any, protection: boolean): Promise<IData> {
	const req: Response = await fetch(url, {
		method: 'GET',
		agent: protection ? agent : null
	});
	const res: string = await req.text();
	const data: IData = {
		secToken: res.match(/\w+="security-token".*value="(\w+)"/i)[1],
		authToken: res.match(/\w+="field-authenticity-token".*name="(\w+)"/i)[1],
		options: res.match(/\w+="options"\s*value="(\d+)"/g).map(opt => opt.match(/value="(\w+)"/i)[1])
	};
	return data;
}

export default getData;