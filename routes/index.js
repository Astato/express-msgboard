var express = require("express");
var router = express.Router();
const os = require("os");
const { readFile, writeFile } = require("fs");

const user = os.userInfo();

router.post("/", function (req, res, next) {
  if (req.body.chat === " ") {
    return;
  }
  readFile("chats.json", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    result = JSON.parse(result);
    const message = {
      name: "You",
      time: new Date(),
      message: req.body.chat,
    };
    result.chats.push(message);
    const newChats = JSON.stringify(result);
    writeFile(
      "chats.json",
      newChats,
      { encoding: "utf8", flag: "w" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const parseChats = JSON.parse(newChats);
        res.render("index", { chatsbubbles: parseChats.chats });
      }
    );
  });
});

router.get("/", function (req, res, next) {
  console.log(user);
  console.log(req.ips);
  readFile("chats.json", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    result = JSON.parse(result);
    res.render("index", { chatsbubbles: result.chats });
  });
});

module.exports = router;
