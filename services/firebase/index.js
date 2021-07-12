import fire from './config'
const dbRef = fire.firestore().collection('my_watchlist')

export const getWatchList = async () => {
	const results = await dbRef.get()

	const data = results.docs.map((doc) => ({
		...doc.data(),
		docId: doc.id,
	}))

	return data
}
export const removeFromFirebaseWatchList = async (id) => {
	const docId = id.toString()
	dbRef.doc(docId).delete()
}
export const addToFirebaseWatchList = async (data) => {
	const docId = data.id.toString()
	await dbRef.doc(docId).set(data)
}
