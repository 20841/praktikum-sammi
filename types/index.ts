import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}

export interface LngParams {
	params: { lng: string }
}


export interface ICourse {
	title: string
	previewImage: string
	level: string
	author: {
		image: string
		name: string
	}
	oldPrice: number
	currentPrice: number
}

export interface ICategory {
	label: string
	icon: string
}

export interface IInstructor {
	name: string
	image: string
	job: string
}

/* */



export interface IBlog {
	title: string
	description: string
  author: string
	date: string
	image: string
	tags: string[]
}


export interface IAuthor {
	name: string
	image: string
	id: string
	title: string
}