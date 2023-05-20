const express = require("express");
const Router = express.Router();
const verifyToken = require("../token/verifyToken");
const User = require("../model/user");
const validate_user_setpin = require("../validation/validate_user_setpin");
const hashPin = require("../hash/hashPassword");

Router.post("/", verifyToken, async (req, res) => {
  try {
    const request_isvalid = validate_user_setpin(req.body);
    if (request_isvalid != true)
      return res.status(400).json({ error: true, errMessage: request_isvalid });

    const user = await User.findById(req.body.user);
    if (!user)
      return res.status(400).json({
        error: true,
        errMessage:
          "An error was encounterd while trying to setup pin please login and try again",
      });
    const pin = await hashPin(req.body.pin);
    await user.set({ pin });
    await user.save();
    res.status(200).json({ error: false, message: { pin } });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
