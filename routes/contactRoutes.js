const express = require('express')
const router = express.Router()
const { getContacts, createContacts, editContacts, deleteContacts, getContactsId } = require("../controllers/contactController");
const validateToken = require('../middleware/validateHandlerToken');

router.use(validateToken)
router.route('/').get(getContacts).post(createContacts)
router.route('/:id').get(getContactsId).put(editContacts).delete(deleteContacts)


module.exports = router;