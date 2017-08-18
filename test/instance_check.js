'use strict';

const Lab = require('lab');
const Code = require('code');
const Fixtures = require('./fixtures');
const { Server } = Fixtures;

const lab = exports.lab = Lab.script();

const { describe, it, before } = lab;
const { expect } = Code;

const InstanceCheck = require('../lib/instance_check');


describe('GET /instance-check', () => {

  let server;

  before(async () => {

    server = await Server;
  });

  it('works', async () => {

    const instance = InstanceCheck.getInstanceID();
    const response = await server.inject({ method: 'GET', url: '/instance-check' });

    expect(response.statusCode).to.equal(200);
    expect(response.result).to.include({ instance });
  });
});
