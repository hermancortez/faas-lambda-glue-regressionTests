const { handler } = require('../index');

test('should return 200 with userId', async () => {
  const event = {
    queryStringParameters: { userId: 'abc' }
  };

  const result = await handler(event);
  expect(result.statusCode).toBe(200);
  expect(JSON.parse(result.body).message).toBe('Hello user abc');
});

test('should return 400 if userId is missing', async () => {
  const event = {
    queryStringParameters: {}
  };

  const result = await handler(event);
  expect(result.statusCode).toBe(400);
});
