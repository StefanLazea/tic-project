const router = require('express').Router();
const { authorize } = require('../middlewares/authorize')
const PartsController = require('../controllers/parts')

router.post("/", authorize, PartsController.savePart);
router.get('/', PartsController.getAllParts);
router.put('/:partId', authorize, PartsController.updateParts);
router.delete('/:partId', authorize, PartsController.deletePart);

module.exports = router;