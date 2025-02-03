import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.post('/signup', async (req: Request, res: Response) => {});

app.post('/signin', (req: Request, res: Response) => {});

app.post('/room', (req: Request, res: Response) => {});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
