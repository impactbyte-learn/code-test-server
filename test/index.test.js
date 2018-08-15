const request = require('supertest')
const app = require('../src/app')

describe('GET /', function() {
  it('Respond with object title: Express', function() {
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

describe('POST / with request body name', function() {
  it('Respond with object name', function() {
    return request(app)
      .post('/')
      .send({
        name: 'Dragon',
        message: "Let's fly to the star"
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.name).toEqual('Dragon')
        expect(response.body.message).toEqual(`Let's fly to the star`)
      })
  })
})
