const express = require('express')
const {getAllStudents, createNewStudent, getOneStudent, updateStudent, deleteStudent} = require('../controllers/studentControllers')
const router = express.Router()

router.route('/students').get(getAllStudents).post(createNewStudent)
router.route('/students/:id').get(getOneStudent).put(updateStudent).delete(deleteStudent)





module.exports = router