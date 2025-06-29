import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema(
    {
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    thumbnail : {
        type : String,
        required : true
    },
    videoFile : {
        type : String,
        required : true 
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    views : {
        type : Number,
        default : 0,
        required : true
    },
    isPublished : {
        type : Boolean,
        required : true
    }
},{timestamps : ture})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)