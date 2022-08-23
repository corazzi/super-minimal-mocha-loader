const assert = require('assert');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('All pass', function () {
  for (i in [...Array(20).keys()]) {
      it('Adds two numbers', async () => {
        await wait(Math.floor(Math.random() * 250));
        assert.equal(2, 1 + 1);
      });
  }
});

describe('All fail', function () {
  for (i in [...Array(20).keys()]) {
      it('Adds two numbers', async () => {
        await wait(Math.floor(Math.random() * 250));
        assert.equal(1, 1 + 1);
      });
  }
});

describe('Random', function () {
  for (i in [...Array(20).keys()]) {
      it('Adds two numbers', async () => {
        await wait(Math.floor(Math.random() * 250));
        assert.equal(Math.floor(Math.random() * 2) + 1, 1 + 1);
      });
  }
});
