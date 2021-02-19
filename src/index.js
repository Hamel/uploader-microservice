import cors from 'cors';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { success, error } from 'consola';

import { PORT } from './config';

// Import routes 
import filesRoutes from './routes/files';

// Initialize express application
const app = express();

// Inject the middleware to the application
app.use(cors());
app.use(bodyParser.json());

// Injecting routes in middleware
app.use('/api/files', filesRoutes);

// Setting express static directory
app.use(express.static(path.join(__dirname, './public')));

// Starting server function
const startApp = () => {
    app.listen(PORT, () => success({ badge: true, message: `Server started on port: ${PORT}`}));
};

startApp();