const express = require("express");

const router = express.Router();

const upload = require(
  "../config/multer"
);

router.post(
  "/image",
  upload.single("image"),
  (req, res) => {

    res.json({

      message:
        "Image uploaded successfully 🚀",

      imageUrl:
        `https://connectnow-backend-bk7y.onrender.com/uploads/${req.file.filename}`,

    });

  }
);



router.post(
  "/document",
  upload.single("document"),
  (req, res) => {

    res.json({

      message:
        "Document uploaded successfully 🚀",

      documentUrl:
        `https://connectnow-backend-bk7y.onrender.com/uploads/${req.file.filename}`,

    });

  }
);


module.exports = router;