import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { matchesMock } from './mocks/matchesMock';

import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Usando o método GET em /matches', function () {
  it('Deve retornar todas partidas', async function () {
    const response = await chai.request(app).get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(matchesMock);
  });
});
describe('Testando o uso do token na rota /matches ', function () {
  it('Deve retornar um erro no metodo PATCH rota /matches/:id', async function () {
    const response = await chai.request(app).patch('/matches/1');

    expect(response.status).to.be.equal(401);
    expect(response.body).to.have.property("message", "Token not found");
  });
  it('Deve retornar um erro no metodo PATCH rota /matches/:id', async function () {
    const token = `aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjgwMjMzMzY0LCJleHAiOjE2ODA4MzgxNjR9.d-jfz6zqIE31w62miadIlgMOEEuy48wUrbFvduk2Adc`
    const response = await chai.request(app).patch('/matches/1').set('Authorization', 'Bearer ' + token);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.have.property("message", "Token must be a valid token");
  });
});

