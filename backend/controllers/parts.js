const firebase = require('firebase');

const getAllParts = (req, res) => {
    let firebaseRef = firebase.database();
    let partsTable = firebaseRef.ref("/parts/");
    partsTable.once('value', (snapshot)=>{
		res.status(200).send(snapshot.val());
	})
	.catch(()=>{
		res.status(500).send();
	})
}

module.exports = {
    getAllParts
}