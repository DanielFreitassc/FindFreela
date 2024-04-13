import React from 'react'
import * as Styles from './style'

interface SubmitButtonProps {
  children: React.ReactNode;
  margin?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  } | null;
}

const SubmitButton = ({children, margin}: SubmitButtonProps) => {
  const marginWithDefault = margin ?? { top: 0, left: 0, bottom: 0, right: 0 };
  return (
    <Styles.SubmitButtonStyled margin={marginWithDefault}>
        {children}
    </Styles.SubmitButtonStyled>
  )
}

export default SubmitButton