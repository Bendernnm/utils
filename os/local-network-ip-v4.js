const os = require('os');

const networkInterfaces = os.networkInterfaces();

const localIp = networkInterfaces.en0.find(e => e.family === 'IPv4');

console.log(localIp);
