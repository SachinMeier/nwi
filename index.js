import lnService from 'ln-service';
import * as db from './db.js';
import * as lnd from './lnd.js';
import {loadConfig} from './config.js';

async function main() {
    const cfg = loadConfig();
    const {lndClient} = lnd.connect(cfg.lnd);
    
    decode_invoice(lndClient, "lnbcrt1u1pjkk7gmpp55g6pydqjxsfrgy35zg6pydqjxsfrgy35zg6pydqjxsfrgy35zg6qdqqcqzzsxqyz5vqsp5j8zq3wylfp5pzqsndy3ylqphnuajeyfctxwwule2d82nqmf8r87q9qyyssq0ymq992gg0zfdknghp54wxef3svkxwxk0l4an805d4mf3w69ma95ekmunnd26e2zenvthjthhs342x9z0z372e9xpwvaqlgm9uqu3dsp6kdd4u");
    let invoice = add_hold_invoice(lndClient, 100, "a234123412341234123412341234123412341234123412341234123412341234")
}

async function handle_customer_invoice(lndClient, invoice) {
    let wrapped_invoice = await wrap_invoice(lndClient, invoice);
    db.saveInvoiceToDB(invoice);
    return res;
}

main();