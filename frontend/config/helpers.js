const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

const root = path.join.bind(path, ROOT);

exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
