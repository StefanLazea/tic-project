const db = require('../firebase/firebase')

const getStock = async (req, res) => {
    const stockRef = db.collection('stocks');
	const snapshot = await stockRef.get();
	let stocks = [];
	snapshot.forEach(doc => {
		let currentStock = { ...doc.data() };
		currentStock.id = doc.id;
		stocks.push(currentStock)
	});
	if (stocks.length === 0) {
		return res.status(404).send({ message: "No stocks found" })
	}
	return res.send(stocks);
}

const updateStockById = async (req, res) => {
    try {
		const stockId = req.params.stockId;
		let stock = { ...req.body };
		await db.collection("stocks").doc(stockId).update(stock);
		res.status(200).json({ message: "Success" });
	} catch (e) {
		res.status(500).json({ message: e.message });
	}
}

const deleteStockById = async (req, res) => {
    try {
		const stockId = req.params.stockId;
		await db.collection("stocks").doc(stockId).delete();
		res.status(200).json({message:"Stocks deleted"});
	 } catch (err){
		 res.status(500).json({message: err.message});
	 }
}

const addPartInStock = async (req, res) => {
    try {
		const stock = {...req.body}
        await db.collection('stocks').add(stock);
		res.status(200).json({ message: "Success" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
module.exports = {
    getStock,
    updateStockById,
    deleteStockById,
    addPartInStock
}