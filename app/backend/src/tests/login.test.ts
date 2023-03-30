import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

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
  it('Deve retornar uma mensagem de erro caso campo email seja invalido', async function () {
    const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'userexample.com',
        password: '123456'
      });

    expect(response.status).to.be.equal(401);
    expect(response.body).to.have.property("message", 'Invalid email or password');
  });
  it('Deve retornar uma mensagem de erro caso campo senha seja invalido', async function () {
    const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'user@trybe.com',
        password: '0'
      });
    expect(response.status).to.be.equal(401);
    expect(response.body).to.have.property("message", 'Invalid email or password');
  });
  it('Deve retornar uma mensagem de erro caso campo email nao tenha no banco', async function () {
    const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'user@trybe.com',
        password: '123456'
      });
    expect(response.status).to.be.equal(401);
    expect(response.body).to.have.property("message", 'Invalid email or password');
  });
});