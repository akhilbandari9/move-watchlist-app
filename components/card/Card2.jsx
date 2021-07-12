import Card from './card'

const Card2 = ({ data }) => {
	const { poster_path, title } = data

	return (
		<Card.Container>
			<Card.Image poster_path={poster_path} alt={title} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
		</Card.Container>
	)
}

export default Card2
