// endpoint para mostrar o status do sistema. request trata do que entra na função e o response trata do quero responder
import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString(); // date é um objeto com a data atual, é necessário o toISOString para que seja mostrado a data no formato desejado
  const databaseVersion = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersion.rows[0].server_version;
  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const databaseMaxConnectionsValue = databaseMaxConnections.rows[0].max_connections;
  const databaseName = process.env.POSTGRES_DB;
  const databaseUsedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseUsedConnectionsValue = databaseUsedConnections.rows[0].count;
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        used_connections: databaseUsedConnectionsValue,
      },
    },
  });
}

export default status;
