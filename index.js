// index.js — canon-hash: a tiny client for the Live Canon state hash
//
// Returns the current FNV-1a 64-bit state hash of the canon and the
// paper count. Used for cache invalidation and live deployment checks.

const DEFAULT_BASE = 'https://live-canon.superinstance.dev';

async function stateHash(options = {}) {
  const base = options.base || DEFAULT_BASE;
  const res = await fetch(`${base}/api/canon/hash`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function getHex(options = {}) {
  const h = await stateHash(options);
  return h.hash || (h.state_hash ? h.state_hash : h);
}

module.exports = { stateHash, getHex, DEFAULT_BASE };
