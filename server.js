const express = require('express');
const parser = require('body-parser');
const router = require('./routes');
const path = require('path')
var session = require('express-session');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'public')))

//Might want later if we create logins and sessions
// app.use(require('express-session')({
//   secret: 'smiles'
// }));

//Might want later for routing
// app.use('/api', router);

//Send index.html if not a route we supply
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const port = 3000;

app.listen(port, function() {
  console.log(`Server running, listening on ${port}...`);
});
