import { useState } from 'react'
import Card from './card'
import {
	removeFromFirebaseWatchList,
	addToFirebaseWatchList,
} from '../../services/firebase'

const Card1 = ({ data }) => {
	const {
		id,
		media_type,
		backdrop_path,
		genre_ids,
		original_language,
		poster_path,
		release_date,
		title,
		adult,
		isAdded,
	} = data

	const [toggle, setToggle] = useState(isAdded)

	const handleAddToWatchList = async () => {
		if (toggle) {
			await removeFromFirebaseWatchList(id)
			setToggle(false)
		} else {
			await addToFirebaseWatchList({
				id,
				media_type,
				backdrop_path,
				genre_ids,
				original_language,
				poster_path,
				release_date,
				title,
				adult,
			})
			setToggle(true)
		}
	}
	return (
		<Card.Container>
			<Card.Image poster_path={poster_path} alt={title} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Button onClick={handleAddToWatchList} isAdded={toggle}>
					Add To Watchlist
				</Card.Button>
			</Card.Body>
		</Card.Container>
	)
}

export default Card1
