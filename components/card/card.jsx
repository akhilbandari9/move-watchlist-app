import { CheckIcon, PlusIcon } from '@heroicons/react/solid'

const Card = ({ children, ...restProps }) => {
	return <div {...restProps}>{children}</div>
}

Card.Container = ({ children, ...restProps }) => {
	return (
		<div
			{...restProps}
			className='w-60 border border-white border-opacity-30 rounded-xl shadow-green flex flex-col'
		>
			{children}
		</div>
	)
}
Card.Image = ({ poster_path, alt, ...restProps }) => (
	<img
		src={'https://image.tmdb.org/t/p/w300' + poster_path}
		alt={alt}
		{...restProps}
		className='rounded-xl flex mx-auto w-full object-cover object-top'
	/>
)
Card.Title = ({ children, ...restProps }) => (
	<h2 {...restProps} className='text-green-400 font-semibold text-lg flex-grow'>
		{children}
	</h2>
)
Card.Button = function ({ isAdded, children, ...restProps }) {
	return (
		<button
			className='bg-green-700 text-gray-100 font-semibold  px-2 py-1 hover:bg-opacity-80 active:bg-opacity-90 rounded-md flex gap-3 items-center'
			{...restProps}
		>
			<span>
				{isAdded ? <CheckIcon className='w-5' /> : <PlusIcon className='w-5' />}
			</span>
			<span> {children}</span>
		</button>
	)
}
Card.Body = ({ children, ...restProps }) => (
	<div
		className='p-3 flex flex-col justify-between h-full flex-grow gap-4'
		{...restProps}
	>
		{children}
	</div>
)

export default Card
