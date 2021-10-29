import app from './app';

const port = process.env.APP_PORT;

app.listen(port, () =>
  console.log('\x1b[33m%s\x1b[0m', `=> Servidor executando na porta ${port}`)
);
