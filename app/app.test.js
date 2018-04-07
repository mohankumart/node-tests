const expect = require('expect')
const request = require('supertest')

var app = require('./app').app

describe('main app', () => {
    it('should return hello world response', (done) =>{
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello world')
            .end(done)
    })
    
    it('should return test response', (done) =>{
        request(app)
            .get('/test')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    'name': 'mohan'
                })
            })
            .end(done)
    })
    
    it('should return my user object', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({'name':'Mohan', 'age': 32})
            })
            .end(done)
    })
})
