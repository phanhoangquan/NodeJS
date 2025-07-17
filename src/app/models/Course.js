const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
   {
      name: { type: String, required: true },
      description: { type: String },
      image: { type: String },
      videoID: { type: String, required: true },
      slug: { type: String, slug: 'name', unique: true },
      // createAt: { type: Date, default: Date.now },
      // updateAt: { type: Date, default: Date.now },
   },
   { timestamps: true },
);

module.exports = mongoose.model('Course', Course);
