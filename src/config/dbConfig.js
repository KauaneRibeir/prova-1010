import mongoose from 'mongoose';

function dbConfig() {
    mongoose
    .connect(`mongodb+srv://dasilvaribeirokauane:<db_password>@cluster0.8pzqv.mongodb.net/`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
}

export default dbConfig;

