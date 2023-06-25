import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World from Express + TypeScript!!!, we are getting good at this!!!!!!, we are aawesome!");
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App is listening on http://localhost:8000/`);
});