/**
 * @jest-environment node
 */
const server = require('./../../src/server');

describe('forms GET route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'POST',
      url: '/formdata',
      payload: {
        formData: 'This is a new form',
        id: 10,
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
