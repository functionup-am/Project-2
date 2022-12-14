const express = require('express');
const router = express.Router();            
const {createCollege,getCollegeDetails} = require('../controllers/collegeController')
const {createIntern}                    = require('../controllers/internController')
const {collegeValidations}              = require('../validations/collegeValidations')
const {internValidations}               = require('../validations/internValidations')

router.post("/functionup/colleges",collegeValidations,createCollege)
router.post("/functionup/interns", internValidations,createIntern)

router.get("/functionup/collegeDetails",getCollegeDetails)                               

module.exports = router;               