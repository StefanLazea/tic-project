const router = require('express').Router();
const StockController = require('../controllers/stock');

router.get('/', StockController.getStock);
router.put('/:id', StockController.updateStockById);
router.delete('/:id', StockController.deleteStockById);
router.post('/add', StockController.addPartInStock);

module.exports = router;