'use strict';

// !dmbgum
const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'Shops';

// Declare the Schema of the Mongo model
const shopSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength: 150
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    verify: {
        type: Schema.Types.Boolean,
        default: false,
    },
    roles: {
        type: Array,
        default: [],
    }
},
{
    timestamps:true,
    collection: COLLECTION_NAME,
});

module.exports = model(DOCUMENT_NAME, shopSchema);