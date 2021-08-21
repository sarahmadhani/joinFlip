import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest('https://reqres.in');

export const endpointGetUsers = async (param) => api.get(`/api/users?page=${param}`)
  .set('Accept', 'application/json') ;


export const endpointCreateUser = async (body) => api.post('/api/users')
.set('Accept', 'application/json')
.send(body) ;
