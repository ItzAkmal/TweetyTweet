import React from 'react'
import Menu from '../components/Menu'

const Home = () => {
	return (
		<div className='grid h-screen grid-cols-4 bg-gray-800 gap-x-4'>
			<Menu />
			<div className='h-full col-span-2 border-l border-r border-gray-500'>
				<h1 className='text-2xl text-center text-white'>Tweets</h1>
			</div>
			<div className='h-full'>
				<h1 className='text-2xl text-center text-white'>Recomended</h1>
			</div>
		</div>
	)
}

export default Home