const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const questionSchema = new mongoose.Schema(
	{
		user: {
			type: ObjectId,
			ref: 'User',
		},
		category: {
			type: ObjectId,
			ref: 'Category',
			required: true,
		},
		question: {
			type: String,
			trim: true,
			required: true,
		},
		code: {
			type: String,

			trim: true,
		},
		options: {
			type: Array,
			required: true,
		},
		ans: {
			type: Number,
			required: true,
		},
		explaination: {
			type: String,
			required: true,
		},
		reference: {
			type: String,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Question', questionSchema);
