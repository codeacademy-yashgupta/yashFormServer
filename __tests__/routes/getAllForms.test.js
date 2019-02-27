/**
 * @jest-environment node
 */
const server = require('./../../src/server');

describe('forms GET route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
  it('should respond with an object', async () => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof {});
  });
  it('should respond with an object with zero fields when truncated', async () => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    const response = await server.inject(options);
    console.log(response.result);
    expect(Object.keys(response.result).length).toEqual(0);
  });
});
