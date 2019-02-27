/**
 * @jest-environment node
 */
const server = require('./../../src/server');

describe('forms GET route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'POST',
      url: '/form',
      payload: {
        formName: 'This is a new form',
        formField: ['Field1'],
      },
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(201);
  });
});
