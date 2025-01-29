{
  "services": [
    {
      "type": "compose",
      "data": {
        "serviceName": "dify",
        "source": {
          "type": "git",
          "repo": "https://github.com/easypanel-io/compose.git",
          "ref": "main",
          "rootPath": "/dify/code",
          "composeFile": "docker-compose.yaml"
        },
        "domains": [
          {
            "host": "$(EASYPANEL_DOMAIN)",
            "port": 80,
            "service": "nginx"
          }
        ]
      }
    }
  ]
}