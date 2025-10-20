import ModeToglle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import GlobalSearch from './global-search'

function Navbar() {
	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-4xl font-creteRound'>VT</h1>
				</Link>
				{/* NavLinks */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className='hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors font-workSans'
						>
							{nav.name}
						</Link>
					))}
				</div>
				{/* Search */}
				<div className='flex items-center gap-1'>
					
					<GlobalSearch/>
					<ModeToglle />
				</div>
			</div>
		</div>
	)
}

export default Navbar
