import mongoose, {Document,Model, Schema} from "mongoose";

const urlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export interface IUrl extends Document {
    originalUrl: string;
    shortUrl: string;
}

const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>('Url', urlSchema);

export default Url;