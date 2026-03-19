import { Client } from "pg"; // A classe client: cria uma conexão TCP com o Postgres, autentica usuário, envia queries SQL e recebe resultados

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  }); // aqui é criado uma instância de conexão, esse objeto contém: host, port, user, password e database

  await client.connect(); // handshake com servidor postgres: abre conexão TCP -> envia credenciais -> autentica -> inicia sessão

  // tratamento de erro para que as requisições sejam devidamente fechadas
  try {
    const result = await client.query(queryObject); // envia sql para server -> postgres executa -> recebe resultado -> converte em objeto JS
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
