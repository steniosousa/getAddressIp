const os = require('os');

const networkInfo = os.networkInterfaces();

console.log(networkInfo['vEthernet (WSL)'][1].address) 
