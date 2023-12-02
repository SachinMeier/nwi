import {randomBytes, createHash} from 'node:crypto';
import test from 'node:test';
import {equal} from 'node:assert';
import * as lnd from './../lnd.js';
import {loadConfig} from './../config.js';

test('add_hold_invoice', async () => {
    let cfg = loadConfig();
    let lndClient = lnd.connect(cfg);

    let preimage = randomBytes(32).toString('hex');
    let paymentHash = createHash('sha256').update(preimage, 'hex').digest('hex');
    let amount = 101;
   
    // generate hold invoice with payment hash
    let res = await lnd.add_hold_invoice(lndClient, amount, paymentHash);
    
    equal(res.id, paymentHash);
    equal(res.tokens, amount);
    return;
});