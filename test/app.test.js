import request from 'supertest/index.js';
import app from '../src/index.js';
import { response } from 'express';
describe('GET /', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200)
    })
});

describe('GET /tasks', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasks').send();
        expect(response.statusCode).toBe(200)
    })

    test('should respond with a array', async () => {
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array)
    })
});

describe('POST /tasks', () => {
    describe('When give a title and description', () => {
        const newTask = {
            title: 'test task',
            description: 'test description'
        }
        //sould respond with a 200 status code
        test('should respond with a 200 status code', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(201);
        });
        //sould respond with a content-type of application/json
        test('should respond with a content-type of application/json', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            //console.log(response.headers);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("application/json"));
        });
        //sould respond with a new task object with id
        test('should respond with a new task object with id', async () => {
            const response = await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
        });
    });

    describe('when title and description is missing', () => {
        test('should respond with a 400 status code.', async () => {
            const response = await request(app).post('/tasks').send({});
            expect(response.statusCode).toBe(400);
        });
    });
});

