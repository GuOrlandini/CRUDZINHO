test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.dependencies.database.version).toBeGreaterThan(15);
  expect(responseBody.dependencies.database.max_connections).toBeGreaterThan(50);
  expect(responseBody.dependencies.database.used_connections).toBeGreaterThan(0);

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});
