import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darkColor, primaryTextColor, secondaryColor } from 'styles/theme'
import { breakpoints } from 'styles/breakpoints'

export const HeaderContainer = styled.header`
background-color: ${darkColor};
`

export const Container = styled.header`
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  color: ${primaryTextColor};

  &,
  & * {
    display: flex;
    align-items: center;
    column-gap: 2rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}

	@media (min-width: ${breakpoints.desktop}) {
		max-width: 1010px;
	}
`

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  &.header-tree-icon {
    background-image: url(${require('/src/assets/svg/tree.svg')});
  }

  &.header-toy-icon {
    justify-self: end;
    background-image: url(${require('/src/assets/svg/ball-2.svg')});
  }
`
export const StyledLink = styled(Link)`
  font-size: 20px;
`

export const Search = styled.input.attrs(() => ({
	type: "search",
  autocomplete: "off"
}))`
  justify-self: end;
	width: 200px;
	height: 30px;
  border-radius: 16px;
`

export const TotalCount = styled.span`
  display: flex;
  justify-content: center;
  width: 22px;
  margin-top: 11px;
  margin-left: 6.7px;
  padding: 2px;
  font-size: 20px;
  background-color: ${secondaryColor};
  border-radius: 50%;
`