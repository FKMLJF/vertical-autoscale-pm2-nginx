module.exports = {
  apps: [{
  name: 'app',
    script: './index.js',
  instances: '8',
  autorestart: true,
  watch: true,
  max_memory_restart: '512M',
  vizion: false,
  exec_mode: 'cluster',
}]
}
