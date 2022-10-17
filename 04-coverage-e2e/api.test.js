const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('./api')
const assert = require('assert')

describe('API Suite test', () => {
  describe('/contact', () => {
    it('should return contact us page and 200 HTTP status code', async() => {
        const res = await request(app)
                  .get('/contact')
                  .expect(200)  
       assert.deepStrictEqual(res.text, 'contact us page')
    })
  })
  describe('/404', () => {
    it('should request inexistent route /hi and redirect to /hello', async() => {
        const res = await request(app)
                  .get('/hi')
                  .expect(200)  
       assert.deepStrictEqual(res.text, 'hello')
    })
  })
})
