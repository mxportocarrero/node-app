var request = require('supertest');
var app = require('../index.js');

// Funcion de mocha
describe('GET /', () => {
    it('respond with hello world', (done) =>{
        // navegar al root y revisar si la respuesta es "hello world"
        request(app).get('/').expect('hello world',done);
    });
});