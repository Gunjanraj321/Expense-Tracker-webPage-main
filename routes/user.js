const express = require("express");


const welcomeController = require("../controllers/welcomeController");
const s_lController = require("../controllers/signup&loginController");
const passController = require("../controllers/forgotpassController");
const {
  createExpense,
  getAllPaginatedExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
  getfilehistory,
  downloadExpense,
} = require("../controllers/expenseController");

const verify = require("../middleware/verifyToken");


const router = express.Router();

//route definition for signin and signup
router.post('/signup',s_lController.processSignUp);
router.post('/signin',s_lController.processLogin);


//route definition for password
router.post('/forgotpassword',passController.requestresetpassword);
router.get('/reset/:forgotId', passController.resetpasswordform);
router.post('/password-reset',passController.resetpassword);


//routes for expense page
router.post("/create", verify, createExpense);
router.get("/paginated", verify, getAllPaginatedExpenses);
router.get("/download", verify, downloadExpense);
router.get("/filehistory", verify, getfilehistory);
router.get("/expenses/:id", verify, getExpenseById);
router.put("/expense/:id", verify, updateExpense);
router.delete("/:id", verify, deleteExpense);


//route for serving the expensePage
router.get("/", welcomeController.getExpensepage);



module.exports = router;
