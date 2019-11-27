import * as authentication from '@feathersjs/authentication';
import app from "../../app";
import totoTest from '../../hooks/toto-test';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [(context: any) => {
    if(Array.isArray(context.data)) {
      return Promise.all(context.data.map((value:any) => app.service('messages').create(value, context.params)))
        .then(results => {
          context.result = results;
          return context;
        });
    }
  }, /*totoTest()*/],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
