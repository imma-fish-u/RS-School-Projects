import { useState, useEffect } from 'react'
import { Toy } from 'types'
import { Filter } from 'components/Home/types'

const useFilter = (filter: Filter, toys: Toy[]): Toy[] => {
  let filteredToys = toys

  useEffect(() => {
		Object.entries(filter).forEach(([key, value]) => {
			const values = value?.split('&')
			filteredToys = filteredToys.filter(toy => values?.includes(toy[key]))
		})
	})

  return filteredToys
}

export default useFilter