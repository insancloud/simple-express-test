const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('responds with 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it('responds with text message', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Welcome to my simple API!');
    });
});

describe('GET /api/data', () => {
    it('responds with JSON', async () => {
        const response = await request(app).get('/api/data');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    it('responds with expected data', async () => {
        const response = await request(app).get('/api/data');
        expect(response.body).toEqual({ message: 'This is your data!' });
    });
});
