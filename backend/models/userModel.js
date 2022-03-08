import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: ture,
    },
    email: {
      type: String,
      require: ture,
      unique: true,
    },
    password: {
      type: String,
      require: ture,
    },
    isAdmin: {
      type: Boolean,
      require: ture,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.Model('User', userSchema)

export default User
