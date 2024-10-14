import express from 'express';
import workshopRouter from './routers/workshop-router.js';
import maintenanceRouter from './routers/maintenance-router.js';
import vehicleRouter from './routers/vehicle -model.js';
import dbConfig from './config/dbConfig.js';

dbConfig();

const app = express();
app.use(express.json());

app.use('/workshop', workshopRouter);
app.use('/maintenance', maintenanceRouter);
app.use('/vehicle', vehicleRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));
