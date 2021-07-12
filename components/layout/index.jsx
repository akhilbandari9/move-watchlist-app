import Header from './Header'

const Layout = ({ children }) => {
	return (
		<div className='bg-black text-gray-200'>
			<Header />
			<div className='max-w-screen-xl mx-auto'>{children}</div>
		</div>
	)
}

export default Layout
