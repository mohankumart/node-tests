const expect = require('expect')
const utils = require('./utils')

describe('operators', ()=>{

    describe('#add', ()=>{
        it('should add two numbers', ()=>{
            var res = utils.add(33, 11)
            // if(res != 44){
            //     throw new Error(`Expected 44, but got ${res}`)
            // }
            expect(res).toBe(44).toBeA('number')
        })
    })

    describe('#square', ()=>{
        it('should square a number', ()=>{
            var res = utils.square(4)
            // if(res != 16){
            //     throw new Error(`Expected 16, but got ${res}`)
            // }
        
            expect(res).toBe(16).toBeA('number')
        })
    })
    

})


describe('array', () => {
    it('should expect some values', () => {
        expect([2,3,5]).toInclude(5)
     })

     it('should first and lastname set', () => {
        var res = utils.setName({}, 'Mohan kumar')
        expect(res).toInclude({
            firstName: 'Mohan',
            lastName: 'kumar'
        })
    })

})




describe('async', () => {
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number')
            done()
        })
    })
})
