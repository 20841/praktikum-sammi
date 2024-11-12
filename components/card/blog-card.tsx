

import { cn } from '@/lib/utils'
import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'

interface Props extends IBlog {
	isVertical?: boolean
}

function BlogCard(blog: Props) {
	console.log(blog)

	return (
		<div
			className={cn(
				'grid gap-4 group',
				blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<Link  href={`/blogs/${blog.author}`}>
				<div className='relative rounded-md bg-secondary'>
					<Image
						width={650}
						height={335}
						src={blog.image}
						alt={blog.title}
						className='-translate-y-6 rounded-md object-cover px-2 grayscale transition-all group-hover:-translate-y-7 group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 md:px-7'
					/>
				</div>
			</Link>
			<div className='flex flex-col space-y-4'>
				<Link href={'/'} className='flex flex-col space-y-4'>
					{/* Time info */}
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='size-5' />
							<p>{format(new Date(blog.date), 'MMM dd, yyyy')}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='size-5' />
							<p>{blog.date} min read</p>
						</div>
					</div>

					{/* Title */}
					<h2 className='font-space-grotesk text-3xl transition-colors group-hover:text-blue-500 max-md:text-2xl'>
						{blog.title}
					</h2>
					<p className='line-clamp-3 text-muted-foreground'>
						{blog.description}
					</p>
				</Link>

				{/* Author */}
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<Image
							src={blog.image}
							alt='author'
							width={30}
							height={30}
							className='rounded-sm object-cover '
						/>
						<p>by {blog.author}</p>
					</div>
					<Dot />
					<div className='flex items-center gap-2'>
						<Link href={`/tags/${blog.tags}`}>
							<Badge variant={'secondary'} role='button'>
								<Tag className='me-2 size-3' />
								{blog.tags}
							</Badge>
						</Link>
						<Link href={'/'}>
							<Badge variant={'outline'} role='button'>
								<Layers2 className='me-2 size-3' />
								{blog.isVertical}
							</Badge>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
