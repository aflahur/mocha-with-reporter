const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
            .post('/user')
            .send({
                "id": 8951243,
                "username": "myskill",
                "firstName": "myskill",
                "lastName": "myskill",
                "email": "myskill@mailsac.com",
                "password": "myskill123",
                "phone": "08123123",
                "userStatus": 1
            })
        console.log((await response).status)
        console.log((await response).body)
    })
})