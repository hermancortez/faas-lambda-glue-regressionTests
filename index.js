exports.handler = async (event) => {
  const userId = event.queryStringParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing userId' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello user ${userId}` }),
  };
};
