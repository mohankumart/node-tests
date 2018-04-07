const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db)

    it('should call saveUser with user object',()=>{
        var email = 'mohan@fireeye.com'
        var password = '123abc'

        app.handleSignup(email. password)
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    })

    // it('should call the spy correctly', ()=>{
    //     var spy = expect.createSpy()
    //     spy('Adrew', 25)
    //     expect(spy).toHaveBeenCalledWith('Adrew', 25)
    // })
})