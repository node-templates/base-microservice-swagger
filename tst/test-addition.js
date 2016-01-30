'use strict';

/* global after, afterEach, before, beforeEach, describe, it */
const request = require('supertest');
const should = require('should');

describe('/add', () => {
  let lib = null;
  beforeEach(() => {
    lib = require('../');
  });
  afterEach(() => {
    lib.close();
  });
  describe('PUT', () => {
    it('Should return expected value for 4+3', (done) => {
      request(lib)
        .post('/add/4/3')
        .expect(200)
        .end((err, res) => {
          try {
            should.equal(err, null);
            res.body.should.eql(7);
            done();
          } catch (subErr) {
            done(subErr);
          }
        });
    });
    it('Should return error for negative argument 1', (done) => {
      request(lib)
        .post('/add/-1/3')
        .expect(500)
        .end((err) => {
          done(err);
        });
    });
    it('Should return error for negative argument 2', (done) => {
      request(lib)
        .post('/add/4/-1')
        .expect(500)
        .end((err) => {
          done(err);
        });
    });
  });
});
