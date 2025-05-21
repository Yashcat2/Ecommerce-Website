import mongoose from "mongoose"; 

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log('DB Connected');  //whenever mongodb connected this will display
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)
}

export default connectDB;