import React, { ReactElement } from 'react'
import { HeaderContainer, Container, StyledLink, Search, Icon, TotalCount} from './styles'

interface Props {
	picked: number
}

const Header = ({ picked }: Props): ReactElement => {

	return (
    <HeaderContainer>
      <Container>
        <div>
          <StyledLink to="/">
            <Icon className="header-tree-icon"></Icon>
          </StyledLink>
          <StyledLink to="/toy">Игрушки</StyledLink>
          <StyledLink to="/tree">Ёлка</StyledLink>
        </div>
        <div>
          <Search />
          <Icon className="header-toy-icon">
            <TotalCount>{picked}</TotalCount>
          </Icon>
        </div>
      </Container>
    </HeaderContainer>
	)
}

export default Header