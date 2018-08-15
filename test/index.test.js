const request = require('supertest')
const app = require('../src/app')

describe('GET /', function() {
  it('respond with title: Express', function() {
    return request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.title).toEqual('Express')
      })
  })
})
