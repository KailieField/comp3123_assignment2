/* -----------------------------------------

   USER VALIDATORS
   
--------------------------------------------*/

const { body } = require('express-validator');

const userValidation= [

    body('username').optional().isEmail().withMessage('--- USERNAME REQUIRED.'),
    body('email').optional().isEmail().withMessage('--- INVALID EMAIL.'),
    body('password').isLength({ min: 4 }).withMessage('--- PASSWORD MUST BE MORE THAN 4 CHARACTERS.')

];

module.exports = userValidation;

