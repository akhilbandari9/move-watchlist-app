import Head from 'next/head'
import Card2 from '../components/card/Card2'
import { getWatchList } from '../services/firebase/index'
export default function Home({ list }) {
	return (
		<div>
			<Head>
				<title>Wactchlist</title>
			</Head>
			<main>
				<h1 className='heading-1'>Your Watchlist</h1>
				<section className='mt-8'>
					{/* FILTERS */}
					<div className=''></div>
					{/* LIST */}
					<div className='flex gap-8 flex-wrap'>
						{list.map((item) => (
							<Card2 data={item} key={item.id} />
						))}
					</div>
				</section>
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const watchList = await getWatchList()

	if (!watchList) {
		return {
			notFound: true,
		}
	}

	return {
		props: { list: watchList },
		revalidate: 60 * 60 * 5,
	}
}
