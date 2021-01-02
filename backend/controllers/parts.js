const db = require('../firebase/firebase')

const getAllParts = async (req, res) => {
	const citiesRef = db.collection('parts');
	const snapshot = await citiesRef.get();
	let parts = [];
	snapshot.forEach(doc => {
		parts.push(doc.data())
	});
	return res.send(parts);
}

module.exports = {
	getAllParts
}