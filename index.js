const app = require('./app');
const { log } = require('./utils/utils');

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    log(`Listening on PORT Number: ${PORT}`)
})