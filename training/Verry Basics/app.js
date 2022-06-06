const os = require("os");

const user = os.uptime();

console.log(user);

const currentOS = {
  name: os.type(),
  relase: os.release(),
};

console.log(currentOS);
