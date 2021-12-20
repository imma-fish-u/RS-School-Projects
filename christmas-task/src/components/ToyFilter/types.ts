export type FilterParams = {
	value: string 
  display: string 
}

export enum SortBy {
  stringASC = 'alphabet-A-Z',
  stringDESC = 'alphabet-Z-A',
  numberASC = 'count-ASC',
  numberDESC = 'count-DESC'
}