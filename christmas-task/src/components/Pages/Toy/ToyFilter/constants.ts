import { SortBy } from "./types"

export const SHAPES = [
	{
		value: 'шар',
		display: 'ball.svg',
	},
	{
		value: 'колокольчик',
		display: 'bell.svg',
	},
	{
		value: 'шишка',
		display: 'cone.svg',
	},
	{
		value: 'снежинка',
		display: 'snowflake.svg',
	},
	{
		value: 'фигурка',
		display: 'toy.svg',
	},
]

export const COLORS = [
	{
		value: 'белый',
		display: '#fff',
	},
	{
		value: 'желтый',
		display: '#FDD700',
	},
	{
		value: 'красный',
		display: '#FD0000',
	},
	{
		value: 'синий',
		display: '#2199EB',
	},
	{
		value: 'зеленый',
		display: '#08AA05',
	},
]

export const SIZES = [
	{
		value: 'большой',
		display: '',
	},
	{
		value: 'средний',
		display: '40px 40px',
	},
	{
		value: 'малый',
		display: '32px 32px',
	},
]

export const SORT_BY = [
	{
		rule: SortBy.stringASC,
		value: 'name',
		display: 'По названию от «А» до «Я»',
	},
	{
		rule: SortBy.stringDESC,
		value: 'name',
		display: 'По названию от «Я» до «А»',
	},
	{
		rule: SortBy.numberASC,
		value: 'count',
		display: 'По количеству по возрастанию',
	},
	{
		rule: SortBy.numberDESC,
		value: 'count',
		display: 'По количеству по убыванию',
	},
]
