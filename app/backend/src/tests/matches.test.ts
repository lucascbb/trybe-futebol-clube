import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { matchesMock } from './mocks/matchesMock';

import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Usando o método GET em /matches', function () {
  it('Deve retornar a tabela de classificao', async function () {
    const response = await chai.request(app).get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(matchesMock);
  });
});
