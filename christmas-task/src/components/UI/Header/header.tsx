import React, { ReactElement } from 'react'
import { HeaderContainer, Container, Link, Search, Icon, TotalCount} from './styles'

const Header = (): ReactElement => {

	return (
    <HeaderContainer>
      <Container>
        <div>
          <Icon className="header-tree-icon"></Icon>
          <Link href="#">Игрушки</Link>
          <Link href="#">Ёлка</Link>
        </div>
        <div>
          <Search />
          <Icon className="header-toy-icon">
            <TotalCount>10</TotalCount>
          </Icon>
        </div>
      </Container>
    </HeaderContainer>
	)
}

export default Header