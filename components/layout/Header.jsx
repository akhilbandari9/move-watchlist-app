import Link from 'next/link'
import { useRouter } from 'next/router'
const links = [
	{
		id: 1,
		name: 'Watchlist',
		href: '/',
	},
	{
		id: 2,
		name: 'All Movies',
		href: '/movies',
	},
]

const Header = () => {
	const router = useRouter()

	return (
		<header className='w-full border-b border-white border-opacity-20 py-2 flex justify-between items-center px-4'>
			<div className=''>Log</div>
			<nav>
				<ul className='flex gap-4'>
					{links.map((item) => (
						<li key={item.id} className='py-2'>
							<Link href={item.href}>
								<span
									className={`${
										item.href === router.asPath
											? 'bg-green-700 hover:bg-green-700'
											: 'hover:bg-green-700 hover:bg-opacity-30'
									} py-2 px-4 rounded-lg cursor-pointer`}
								>
									{item.name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
