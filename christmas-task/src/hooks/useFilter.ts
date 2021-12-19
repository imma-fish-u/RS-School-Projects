import { useMemo } from 'react'
import { Toy } from 'types'
import { Filter } from 'components/Home/types'

const useFilter = (filter: Filter, toys: Toy[]) => {
  let filteredToys = toys

  const memoFiltered = useMemo(() => {
		Object.entries(filter).forEach(([key, value]) => {
			if (typeof value === 'string') {
				const values = value?.split('&')
				filteredToys = filteredToys.filter(toy => values?.includes(toy[key]))
			} else if (typeof value === 'boolean') {
				filteredToys = filteredToys.filter(toy => value === toy[key])
			}
		})
		return filteredToys;
	}, [filter, filteredToys])

  return memoFiltered
}

export default useFilter