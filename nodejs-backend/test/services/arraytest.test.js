const assert = require('assert');
const app = require('../../src/app');

describe('\'arraytest\' service', () => {
  it('registered the service', () => {
    const service = app.service('arraytest');

    assert.ok(service, 'Registered the service (arraytest)');
  });
});
