const request = require('supertest');

var app = require('./server').app;

describe('GET Function', () => {
  it('[/] It should be Hello World!', (done) => {
    request(app)
      .get('/')
      .expect('Hello World!')
      .end(done);
  })

  it('[/users] It should be show users', (done) => {
    request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})