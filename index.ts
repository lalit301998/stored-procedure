import app from './app';
 import {Routes} from './routes/routes'
//const Routes = require('./routes/routes')
const port = process.env.PORT || 4000;

// App Running on this port
app.listen(port, (): void => { 
  console.log("App is Listening on port: " + port);
});