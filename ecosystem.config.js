module.exports = {
  apps: [
    {
      name: "OrphanRadio",
      script: "./server.js",
      env: {
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-34-209-92-96.us-west-2.compute.amazonaws.com",
      key: "~/.ssh/Orphan2pair.pem",
      ref: "origin/master",
      repo: "git@github.com:Mcas4150/OrphanRadio.git",
      path: "/home/ubuntu/OrphanRadio",
      "post-deploy":
        "npm run client-install && npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
