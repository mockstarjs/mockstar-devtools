module.exports = `
{
  "description": "description for <%= mockerConfig.config.name %>",
  "route": "<%= mockerConfig.config.route %>",
  "defaultModule": "debug",
  "method": "<%= mockerConfig.config.method || 'get' %>",
  "tags": [
    "tag1",
    "tag2",
    "<%= mockerConfig.config.method || 'get' %>"
  ]
}

`;