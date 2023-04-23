const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@adesc Get all contacts
//@route Get /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
})

//@adesc Create a contact
//@route Post /api/contacts
//@access public
const createContacts = asyncHandler(async (req, res) => {
    console.log(`The request is `, req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(404);
        throw new Error(`All fields are mandatory`);
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact);
})

//@adesc Get a contact
//@route Get /api/contacts/:id
//@access public
const getContactsId = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})

//@adesc Update a contact
//@route Put /api/contacts/:id
//@access public
const editContacts = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updateContact);
})

//@adesc Delete a contact
//@route Delete /api/contacts/:id
//@access public
const deleteContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    await Contact.deleteOne({ _id: req.params.id })
    res.status(200).json(contact);
}) 


module.exports = { getContacts, createContacts, editContacts, deleteContacts, getContactsId }