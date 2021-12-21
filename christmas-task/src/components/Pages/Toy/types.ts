import { SortBy } from "components/Pages/Toy/ToyFilter/types"

export type Filter = {
	[key: string]: string | boolean | undefined
}

export type Sort = {
	rule: SortBy
	field: string
}
