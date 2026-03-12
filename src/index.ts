import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'template-curator-demo' });
});

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from template-curator-demo!' });
});

app.listen(port, () => {
  console.log(`template-curator-demo listening on port ${port}`);
});

export default app;
