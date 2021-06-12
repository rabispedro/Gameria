import { Router, Request, Response } from 'express';

const routes = Router();

routes.post('/users', (request: Request, response: Response) => {
	const {name, email} = request.body;

	const user = {
		name,
		email
	}

	return response.json(user);
});

routes.get("/", (request: Request, response: Response) => {

		return response.json({
			message: "Hello World!"
		}).status(200);
});

export default routes;