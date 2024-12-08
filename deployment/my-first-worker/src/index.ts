export interface Env { }

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		/*  
			When we write a backend app we worry about: 
				- the method (GET, POST, PUT, DELETE, etc) of the request
				- the body of the request
				- the headers of the request
				- the query parameters of the request
				etc.

			Here in cloudflare workers we can access all of these things from the `request` object.
		*/
		console.log(request.url);
		console.log(request.method);
		console.log(request.body);
		console.log(request.headers);

		if (request.method === 'GET') {
			return Response.json({
				message: 'you sent a get request, drogon!!!',
			});
		} else {
			return Response.json({
				message: 'you did not send a get request',
			});
		}
	},
};
