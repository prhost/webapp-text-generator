module.exports = {
    apps: [
        {
            name: 'NeurovIA chat',
            exec_mode: 'cluster',
            instances: '1',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            max_memory_restart: '200M',
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
}