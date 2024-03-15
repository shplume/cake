'use strict';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const PRIMSA = Symbol('Application#prisma');

module.exports = {
  get prisma() {
    if (!this[PRIMSA]) {
      this[PRIMSA] = prisma;
    }
    return this[PRIMSA];
  },
};
