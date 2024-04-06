import React from 'react'
import * as Styles from './style'

const SubmitButton = ({children}: {children: React.ReactNode}) => {
  return (
    <Styles.SubmitButtonStyled>
        {children}
    </Styles.SubmitButtonStyled>
  )
}

export default SubmitButton