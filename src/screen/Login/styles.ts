import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const LoginStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormStyled = styled(Form)`

`

export const InputStyled = styled(Field)`
    width: 30em;
    height: 2em;
    border-radius: 4px;
    border: 1px solid black;
`

export const ContainerSessao = styled.div`
    display: flex;
    flex-direction: column;
`

export const ErrorStyled = styled(ErrorMessage)`

`

export const LabelStyled = styled.span`

`

