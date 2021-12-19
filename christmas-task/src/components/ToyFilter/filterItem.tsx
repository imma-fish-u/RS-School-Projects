import React, { ReactElement } from 'react'
import { FilterContainer, LabelCheckbox, Checkbox } from './styles'

interface Props {
	title: string
  name: string
  data: Array<FilterParams>
}

type FilterParams = {
	value: string 
  display: string 
}

const FilterItem = ({ title, name, data }: Props): ReactElement => (
  <FilterContainer>
    <p>{title}</p>
    {data.map(el => (
      <>
        <Checkbox name={name} id={el.value} value={el.value}/>
        <LabelCheckbox key={el.value} htmlFor={el.value} display={el.display} className={name}></LabelCheckbox>
      </>
    ))}
  </FilterContainer>
)

export default FilterItem