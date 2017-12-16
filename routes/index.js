var express = require('express');
var router = express.Router();

/* GET home page. */
var userController = require("../controller/userController.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  
  res.json([
    {
      id: 1,
      username: "samsepi0l"
    },
    {
      id: 2,
      username: "D0loresH4ze"
    }
  ]);
});

router.post("/login", userController.login);
// router.post("/dltUser", userController.deleteUser);
router.post("/signup", userController.signup);
// router.post("/updateUser",userController.updateUser);

module.exports = router;
