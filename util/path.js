const path = require('path');

// const rootOfProject = process.mainModule.filename; // its root where server file exists
const rootOfProject = require.main.filename; // its same as above because mainModule is deprecated
module.exports = path.dirname(rootOfProject);
