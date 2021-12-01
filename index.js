// require your server and launch it
const server = require('./api/server');

const port = 9000;

server.listen(port, () => {
    console.log("Api3-Project listening on 9000")
})