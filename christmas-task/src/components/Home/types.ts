import { SortBy } from "components/ToyFilter/types"

export type Filter = {
	[key: string]: string | boolean | undefined
}

export type Sort = {
	rule: SortBy
	field: string
}
