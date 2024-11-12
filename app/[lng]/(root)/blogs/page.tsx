import BlogCard from '@/components/card/blog-card'
import TopBar from '@/components/shared/top-bar'
import { blogs } from '@/constants'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

function Page() {


	return (
		<>
			<TopBar label='blogs' description='blogsDescription' />
			<div className='mx-auto max-w-6xl'>
			<div className='relative flex flex-col items-center justify-end '>
				

				<div className='mt-4 flex items-center gap-1'>
					<Home className='size-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Blogs</p>
				</div>
			</div>

      
			<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
				{blogs.map(blog => (
					<BlogCard  key={blog.title} {...blog} isVertical/>
				))}
			</div>
		</div>
		</>
	)
}

export default Page