import express from 'express';
import morgan from 'morgan';
import miruta from './routes/user.routes.js';

const App = express();
App.use(morgan('dev'));
App.use('/api',miruta);


export default App;