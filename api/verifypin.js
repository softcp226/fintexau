const express = require("express");
const Router = express.Router();
const verifyToken = require("../token/verifyToken");
const User = require("../model/user");
const validate_user_setpin = require("../validation/validate_user_setpin");
const VerifyPin = require("../hash/comparePassword");

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
          "An error was encounterd while trying to verify your pin. Please login and try again",
      });
    if (!user.pin)
      return res.status(200).json({
        error: true,
        errMessage: "you need to login again to set your pin",
      });

    const verifiedpin = await VerifyPin(req.body.pin, user.pin);
    if (verifiedpin != true)
      return res
        .status(400)
        .json({ error: true, errMessage: "invalid pin please try again" });
    res.status(200).json({ error: false, message: { pin: user.pin } });
    // const pin = await hashPassword(req.body.password);
    // await user.set({ pin });
    // await user.save();
    // res.status(200).json({ error: false, message: "success" });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
