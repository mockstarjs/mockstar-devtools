module.exports = `
{
  "description": "description for <%= businessMocker.config.name %>",
  "route": "<%= businessMocker.config.route %>",
  "defaultModule": "debug",
  "method": "<%= businessMocker.config.method %>",
  "tags": [
    "tag1",
    "tag2",
    "<%= businessMocker.config.method %>"
  ]
}

`;