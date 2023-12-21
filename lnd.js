import lnService from "ln-service";

export function connect(cfg) {
  const { lnd } = lnService.authenticatedLndGrpc(cfg);
  return lnd;
}

export async function wrap_invoice(lnd, invoice) {
  let decodedInvoice = await decode_invoice(lnd, invoice);
  let wrapped_invoice = await add_hold_invoice(lnd, decodedInvoice.mtokens, decodedInvoice.id);
  return wrapped_invoice;
}

export async function add_hold_invoice(lnd, amount, paymentHash) {
  return await lnService.createHodlInvoice({ lnd, id: paymentHash, tokens: amount });
}

export async function decode_invoice(lnd, invoice) {
  return await lnService.decodePaymentRequest({ lnd, request: invoice });
}
