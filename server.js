const app = require('./src/app');
const { app: { port } } = require("./src/configs/config.mongodb");

const PORT = port || 3055;
const server = app.listen(PORT, (req, res) => {
    console.log('WSV eCommerce start with port ' + PORT);
});

process.on('SIGINT', () => {
    server.close(() => console.log('Exit server express'));
})