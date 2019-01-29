module.exports = {
  apps: [
    {
      name: 'exchange-hedging',
      append_env_to_name: true,
      interpreter: './node_modules/.bin/babel-node',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      script: './app.js',
      env: {
        NODE_ENV: 'development',
        PM2_ENV: 'development'
      },
      env_stage: {
        NODE_ENV: 'production',
        PM2_ENV: 'stage'
      },
      env_production: {
        NODE_ENV: 'production',
        PM2_ENV: 'production'
      }
    }
  ]
}
