'use strict';

const Mocha = require('mocha');
var Base = require('mocha/lib/reporters/base');

const {
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
} = Mocha.Runner.constants;

class SuperMinimalReporter {
    constructor(runner) {
        const stats = runner.stats;

        runner.on(EVENT_TEST_PASS, () => {
             process.stdout.write('✔');
        }).on(EVENT_TEST_FAIL, () => {
             process.stdout.write('×');
        }).on(EVENT_RUN_END, () => {
            process.stdout.write("\n");
            process.stdout.write(`[${stats.suites} suites] ${stats.passes} / ${stats.tests} (${stats.duration / 1000}s)`);
            process.stdout.write("\n\n\n");
        });
    }
}

module.exports = SuperMinimalReporter;
