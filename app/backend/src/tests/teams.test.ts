import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { teamsMock } from './mocks/teamsMock';
import { teamIdMock } from './mocks/teamsMock'

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método GET em /teams & /teams/:id', function () {
  it('Retorna a quantidade total de teams', async function () {
    const response = await chai.request(app).get('/teams');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(teamsMock);
});
it('Retorna a team baseado no ID', async function () {
  const response = await chai.request(app).get('/teams/1');

  expect(response.status).to.be.equal(200);
  expect(response.body).to.deep.equal(teamIdMock);
});
});
describe('Usando o método POST em /login', function () {
  it('Deve retornar uma mensagem de erro caso nao tenha campo email ou password', async function () {
    const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'user@example.com'
      });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.have.property("message", 'All fields must be filled');
  });
});

