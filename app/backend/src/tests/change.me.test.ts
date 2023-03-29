import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import User from '../database/models/UserModel';

import { teamsMock } from './mocks/teamsMock';
import { teamIdMock } from './mocks/teamsMock'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método GET em /teams', function () {
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
