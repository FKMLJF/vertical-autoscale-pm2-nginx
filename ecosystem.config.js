module.exports = {
  apps: [{
  name: 'app',
    script: './index.js',
  instances: '20',
  autorestart: true,
  watch: true,
  max_memory_restart: '512M',
  vizion: false,
  exec_mode: 'cluster',
}]
}
