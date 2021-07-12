import Head from 'next/head'
import Card1 from '../components/card/Card1'
import { getWatchList } from '../services/firebase'

const movies = ({ list }) => {
	return (
		<>
			<Head>
				<title>Trending Movies</title>
			</Head>
			<main>
				<h1 className='heading-1 text-center'>Trending Movies</h1>
				<section className='mx-auto my-8'>
					{/* SEARCH BAR */}
					<div className=''></div>
					<div className='flex flex-wrap justify-between md:justify-evenly items-stretch gap-2 md:gap-8 '>
						{list.map((item) => (
							<Card1 key={item.id} data={item} />
						))}
					</div>
				</section>
			</main>
		</>
	)
}

export default movies

//get data
export async function getServerSideProps() {
	const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
	const res = await fetch(URL)
	const { results } = await res.json()
	const watchList = await getWatchList()

	const data = results.map((item) => {
		const watchListIds = watchList.filter(
			(watchListItem) => watchListItem.id == item.id
		)
		return {
			...item,
			isAdded: watchListIds[0]?.id === item.id,
		}
	})

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { list: data },
	}
}
