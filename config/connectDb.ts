import mongoose from 'mongoose';

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('database connected successfully');
    } catch (error) {
        console.log('database connection failure');
    }
}

export default connectDb;