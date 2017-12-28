var express = require("express");
var router = express.Router();
var multer = require("multer");

const app = express();

/* GET home page. */
var userController = require("../controller/userController.js");

const upload = multer({
  dest: "./uploads"
});

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

router.post("/files", upload.single("pro"), function(req, res, next) {
  var bookDetail = req.body;

  if (req.file) {
    res.json({
      status: true,
      message: "Book uploaded Successfully",
      book_name: bookDetail.book_name,
      name_on_server: req.file.name
    });
  } else {
    res.json({
      status: false,
      message: "Oops, some error occurred"
    });
  }
});

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/addclass", userController.addClass);
router.post("/addsubject", userController.addSubject);
router.get("/fetchteacher", userController.fetchTeacher);
router.get("/fetchclass", userController.fetchClass);
router.post("/fetchsubject", userController.fetchSubject);
router.post("/makeannouncement", userController.makeAnnouncement);
router.post("/addevent", userController.addEvent);

module.exports = router;
