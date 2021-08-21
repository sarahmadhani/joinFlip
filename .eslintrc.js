module.exports = {
  "extends": "airbnb-base",
  "root": true,
  "env": {
    "jest": true
  },
  "rules": {
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "object": true,
        "array": true,
      },
    }, {
      "enforceForRenamedProperties": false
    }],
    "import/no-cycle": "[0, { maxDepth: 2 }]",
    "max-len": "off",
    "linebreak-style": 0,
    "class-methods-use-this": 0,
    "no-unused-expressions": 0
  },
  "globals": {
    "resp": true,
    "body": true,
  }
}