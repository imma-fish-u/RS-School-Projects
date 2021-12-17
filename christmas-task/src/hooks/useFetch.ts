import { useState, useEffect } from 'react'
import { Toy } from 'types'
import { default as data } from 'assets/data/data.json'

type Response = {
	toys: Toy[]
	error: string
} 

const useFetch = (): Response => {
	const [toys, setToys] = useState<Toy[]>([])
	const [err, setErr] = useState<string>('')

  // const filterByParameter = (toys: Toy[]) => {
  //   let filteredToys = toys
  //   Object.entries(filter).forEach(([key, value]) => {
  //     const values = value?.split('&')
  //     filteredToys = filteredToys.filter(toy => values?.includes(toy[key]))
  //   })
    
  //   setToys(filteredToys)
  //   console.log(toys)
  // }

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data)
        const result = await response.json() as Toy[]
        if (response.ok) {
          setToys(result)
          console.log(result)
        } else {
					setErr('smth went wrong')
        }
      } catch (e) {
				setErr((e as Error).message)
      }
    }
    fetchData()
  }, [])

	return {
		toys,
		error: err,
	}
}

export default useFetch


