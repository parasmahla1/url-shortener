import mongoose from 'mongoose';

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

declare global {
    var mongooseCache: MongooseCache | undefined;
}

const cached = global.mongooseCache || { conn: null, promise: null };
global.mongooseCache = cached;

mongoose.set('bufferCommands', false);

async function connectDb() {
    if (cached.conn) {
        return cached.conn;
    }

    const mongoUri = process.env.MONGO_URI?.trim();

    if (!mongoUri) {
        throw new Error('MONGO_URI is missing. Set it in your .env file.');
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        throw error;
    }
}

export default connectDb;