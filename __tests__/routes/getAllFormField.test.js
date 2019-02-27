/**
 * @jest-environment node
 */
const server = require('./../../src/server');

describe('form/{id} GET route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/form/77794834',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should respond with an object', async () => {
    const options = {
      method: 'GET',
      url: '/form/77794834',
    };
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof {});
  });
});
