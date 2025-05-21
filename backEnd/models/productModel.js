import mongoose from "mongoose";

//create schema

const productSchema = new  mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: Array, required: true},
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    sizes: {type: Array, required: true},
    bestseller: {type: Boolean},
    date: {type: Number, required: true},

})


const productModel = mongoose.models.product || mongoose.model("product",productSchema)   //whenever we run thsi project  creaete multiple models so we use op now when there is a model available that one will use iver if it not availabel it will create new mmodel with schema

export default productModel;