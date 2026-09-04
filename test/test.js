const { stateHash, getHex, DEFAULT_BASE } = require('../index.js');

async function run() {
  console.log('canon-hash self-test');
  console.log('  base:', DEFAULT_BASE);
  const h = await getHex();
  console.log('  state hash:', h);
  if (!h || typeof h !== 'string') throw new Error('expected string hash');
  if (!h.startsWith('0x')) throw new Error('expected hex with 0x prefix');
  console.log('  ✓ hash format ok');
  const full = await stateHash();
  console.log('  full response keys:', Object.keys(full).join(','));
  console.log('  ✓ all checks passed');
}

run().catch(err => {
  console.error('  ✗ test failed:', err.message);
  process.exit(1);
});
