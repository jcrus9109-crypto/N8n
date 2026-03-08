process.env.N8N_PORT = '10000';
process.env.N8N_HOST = '0.0.0.0';
process.env.EXECUTIONS_PROCESS = 'main';
process.env.EXECUTIONS_DATA_PRUNE = 'true';
process.env.EXECUTIONS_DATA_MAX_AGE = '1';
process.env.N8N_GRACEFUL_SHUTDOWN_TIMEOUT = '0';
process.env.NODE_OPTIONS = '--max-old-space-size=768';

const { spawn } = require('child_process');

const n8n = spawn('./node_modules/.bin/n8n', ['start'], {
  stdio: 'inherit',
  env: process.env
});

n8n.on('close', (code) => {
  console.log(`n8n exited with code ${code}`);
  process.exit(code);
});
