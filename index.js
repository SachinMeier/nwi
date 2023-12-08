import lnService from "ln-service";
import * as db from "./db.js";
import * as lnd from "./lnd.js";
import { loadConfig } from "./config.js";

async function main() {
  const cfg = loadConfig();
  const client = lnd.connect(cfg.lnd);

  const res = await lnd.decode_invoice(
    client,
    "lnbc200u1pjhy7p5pp5tlgw7xkccvk5vjmtmlwm8urvfccmn827drz4kt624a3qtmn38lqqdr62pskjepqw3hjqsnfw33k76twv4ezq3njv4jkcctwvdjjq2z0wfjx2u3qf9zr5gpsx5mnwwfexqcj6etyvenz6drrxesj6wryvvcz6dp3vyuxvd3hx56nqdmy9ycqzzsxqrrs0sp5pxhcevcfmh7gnazaxy2fxh2fn24s7my2jzszy4n50vsd053mzs8s9qyyssqwu0u54wgcla07d8dxc30e3e5ng75c29t50n0jgtdy9tyf9c0wwlxkwpqdlzxvvggzy59xd5xnlswquskuakcegf0r03mghmvs3s0zvgqyszval"
  );
  let invoice = lnd.add_hold_invoice(
    client,
    100,
    "a234123412341234123412341234123412341234123412341234123412341234"
  );
}

async function handle_customer_invoice(lndClient, invoice) {
  let wrapped_invoice = await lnd.wrap_invoice(lndClient, invoice);
  db.saveInvoiceToDB(invoice);
  return res;
}

main();
