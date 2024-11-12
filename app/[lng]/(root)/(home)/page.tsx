import Categories from './_components/categories'
import FeaturedCourses from './_components/featured-courses'
import Hero from './_components/hero'
import Instuructor from './_components/instuructor'
import LearningJourney from './_components/learning-journiy'

function Page() {
	return (
		<>
			<Hero />
			<FeaturedCourses/>
			<Categories/>
			<Instuructor/>
			<LearningJourney/>
		</>
	)
}

export default Page
