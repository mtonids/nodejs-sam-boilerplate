'use strict';

import { expect } from 'chai';

import handler from '../../../functions/sample-app/app.js';
import emptyEvent from '../../resources/event-payloads/empty-event.json' assert { type: "json" };

describe('Test sample app', function () {

    it('it should return pong', async function () {
        const res = await handler(emptyEvent, context);
        expect(res.body.success).to.equal('OK');
        expect(res.body.body.message).to.equal('pong');
        expect(res.body.errors).to.be.an('array').that.is.empty;
    });
});
