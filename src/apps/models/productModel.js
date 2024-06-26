const mongoose = require("../../common/database")();

const productSchema = new mongoose.Schema({
    thumbnails: [String],
    description: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0,
    },
    cat_id: {
        type: mongoose.Types.ObjectId,
        ref: "Categories",
        required: true,
    },
    status: {
        type: String,
        default: "",
    },
    featured: {
        type: Boolean,
        default: false,
    },
    warranty: {
        type: String,
        required: true,
    },
    accessories: {
        type: String,
        default: "",
    },
    promotion: {
        type: String,
        default: "",
    },
    is_stock: {
        type: Boolean,
        default: true,
    },
    name: {
        type: String,
        required: true,
        text : true
    },
    slug: {
        type: String,
        required: true,
    },

},{
        timestamps: true,
});
const ProductModel = mongoose.model("Products", productSchema, "products");
module.exports = ProductModel;