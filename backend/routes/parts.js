const router = require('express').Router();
const { authorize } = require('../middlewares/authorize')
const PartsController = require('../controllers/parts')

router.post("/", authorize, (req, res) => {
    return res.send({ message: "henlo" })
});
router.get('/', PartsController.getAllParts);

module.exports = router;