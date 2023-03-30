// import * as sinon from 'sinon';
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
});