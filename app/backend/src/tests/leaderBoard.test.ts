import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { leaderBoard, leaderBoardHome, leaderBoardAway } from './mocks/leaderboard';

import { app } from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Usando o método GET em /leaderboard', function () {
  it('Deve retornar a tabela de classificao', async function () {
    const response = await chai.request(app).get('/leaderboard');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(leaderBoard);
  });
});
describe('Usando o método GET em /leaderboard/home', function () {
  it('Deve retornar a tabela de classificao', async function () {
    const response = await chai.request(app).get('/leaderboard/home');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(leaderBoardHome);
  });
});
describe('Usando o método GET em /leaderboard/away', function () {
  it('Deve retornar a tabela de classificao', async function () {
    const response = await chai.request(app).get('/leaderboard/away');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(leaderBoardAway);
  });
});