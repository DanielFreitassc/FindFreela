import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import loginImage from '../../assets/loginImage.svg'
import { theme } from "../../styles/theme";

export const LoginStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 36px;
`

export const InputStyled = styled(Field)`
    width: 26.25em;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #DED2D9;
    padding-left: 10px;
`

export const ContainerSessao = styled.div`
    display: flex;
    flex-direction: column;
`

export const ErrorStyled = styled(ErrorMessage)`
    color: red;
    font-size: 10px;
`

export const LabelStyled = styled.span`
    margin-bottom: 5px;
    color: #828282;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${loginImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    background-clip:border-box;
    background-color: ${theme.color.thirdColor};
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const FormContainer = styled.div`
    width: 70%;
    height: 97vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
`

export const FormTitle = styled.h1`
    font-size: 4em;
    color: ${theme.color.secondaryColor};
    margin-bottom: 37px;
`
export const FormCaption = styled.h2`
    font-size: 2.25em;
    color: ${theme.color.secondaryColor};
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-bottom: 36px;
`
export const RegisterContainer = styled.div`
    display: flex;
    margin-top: 78px;
    align-items: center;
    gap: 10px;

    span{
        font-size: 18px;
        color: #828282;
    }

    a{
        text-decoration: none;
        color: ${theme.color.primaryColor};
    }
`

export const ImageTitle = styled.h1`
    font-size: 40px;
    font-weight: bolder;
    color: ${theme.color.white};
` 

export const ImageCaption = styled.h3`
    font-size: 25px;
    font-weight: bold;
    color: ${theme.color.white};
`

export const ImageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
`

export const StyledSelected = styled.select`
    height: 55px;
    width: 100%;
    font-weight: normal;
    color: #7B7B7B;
    margin: 0 auto;
    font-size: 24px;
    text-align: center;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #DED2D9;
`

export const StyledOption = styled.option`
    width: 30px;
    color: #7B7B7B;
`