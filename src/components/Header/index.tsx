import { Outlet } from 'react-router-dom'
import * as Styles from './styles'

const Header = () => {
  return (
    <>
        <Styles.HeaderStyled>
            <Styles.Title>Find Freela</Styles.Title>
        </Styles.HeaderStyled>
        <Styles.Content>
            <Outlet />
        </Styles.Content>
    </>
  )
}

export default Header