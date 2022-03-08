import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: ture,
      ref: 'User',
    },
    name: {
      type: String,
      require: ture,
    },
    image: {
      type: String,
      require: ture,
    },
    brand: {
      type: String,
      require: ture,
    },
    category: {
      type: String,
      require: ture,
    },
    description: {
      type: String,
      require: ture,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      require: ture,
      default: 0,
    },
    numReviews: {
      type: Number,
      require: ture,
      default: 0,
    },
    price: {
      type: Number,
      require: ture,
      default: 0,
    },
    countInStock: {
      type: Number,
      require: ture,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.Model('User', productSchema)

export default Product
