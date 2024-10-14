import mongoose from 'mongoose';

function dbConfig() {
    mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}"`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
}

export default dbConfig;

