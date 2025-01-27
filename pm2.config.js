module.exports = {
    apps: [
        {
            name: 'NeurovIA chat',
            exec_mode: 'cluster',
            instances: '1', // Or a number of instances
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            max_memory_restart: '200M',
            env_production: {
                NODE_ENV: "production",
                BASE_URL: "https://chat.neurovia.com",
                NEXT_PUBLIC_BASE_URL: "https://chat.neurovia.com"
            }
        }
    ]
}