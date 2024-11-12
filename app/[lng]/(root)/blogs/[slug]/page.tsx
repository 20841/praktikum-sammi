import TopBar from '@/components/shared/top-bar'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
	return (
		<>
			<TopBar label='blogs'  />
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
					<p className='text-muted-foreground'>Authors</p>
				</div>
        <h1 className='mt-10 font-space-grotesk '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque explicabo dolores id necessitatibus in adipisci molestias perferendis harum. Incidunt quam repellendus explicabo modi est perferendis at beatae rerum pariatur porro, voluptas non temporibus enim! Ea at, debitis reiciendis quia, placeat distinctio veritatis porro quae rem aut molestiae, ipsam mollitia suscipit voluptas numquam harum nihil architecto pariatur facilis enim obcaecati nobis fugiat? Itaque nisi labore illo dolorum. Exercitationem corrupti nihil corporis quidem eius accusamus placeat ab! Quam officiis porro, dolore voluptate, totam culpa expedita facilis veniam mollitia iusto modi delectus in impedit earum reprehenderit corrupti quae cupiditate perferendis itaque fugit laborum vero. Fuga iure odit deserunt distinctio, facilis expedita officia ipsa totam veritatis atque consectetur blanditiis corrupti vitae corporis ab culpa a mollitia officiis. Praesentium provident impedit debitis, dicta inventore corporis consequatur tempora modi unde nobis quibusdam dolorum rem deserunt, placeat odit architecto nam! Dolorum sapiente officiis dolor reprehenderit natus laboriosam molestias voluptate provident, alias eligendi distinctio perspiciatis odit magnam nulla labore fugiat ut ipsam, ex praesentium, at numquam harum dolores. Dolores ea dolore alias culpa. Quisquam corrupti dolor dolore, soluta molestiae nulla ut! Facere maiores tempora, debitis tenetur ipsam nisi eos qui aliquid labore quas quasi vel incidunt, veniam iure in at optio voluptates ipsa saepe? Facere tempora odit quisquam nostrum qui soluta magnam ipsum nesciunt, est sunt quis exercitationem minus maiores cum consectetur commodi, a quasi numquam deleniti explicabo asperiores ducimus? Exercitationem praesentium ab quas, reprehenderit perspiciatis suscipit. Illum!</h1>
			</div>
      </div>
			</>
	)
}

export default Page
