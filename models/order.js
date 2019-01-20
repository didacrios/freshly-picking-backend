import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderModel = new Schema({
  id_order: { type: Number },
  date_add: { type: Date },
  customer_name: { type: String },
  delivery_address: { type: String },
  country: { type: String },
  products: { type: [String] },
  status: { type: Number }
})

export default mongoose.model('orders', orderModel)