const router = require('express').Router();

// router.use("/auth", authRouter);
router.get('/test', (req, res) => {
    res.send({ message: "ok" })
})

module.exports = router;