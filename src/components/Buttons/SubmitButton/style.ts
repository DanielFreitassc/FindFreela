import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { IMargin } from "./types";


export const SubmitButtonStyled = styled.button.attrs<IMargin>({
    type:'submit'
})`
    width: 100%;
    height: 50px;
    border: 1px solid ${theme.button.primaryColor};
    background-color: ${theme.button.primaryColor};
    color: ${theme.color.white};
    border-radius: 5px;
    box-shadow: 1px 1px 1px rgba(1, 1, 1, 0.3);
    font-weight:bolder;
    margin: ${({ margin }) => (margin ? `${margin?.top ?? 0}px ${margin?.right ?? 0}px ${margin?.bottom ?? 0}px ${margin?.left ?? 0}px` : '0')};

    &:hover{
        box-shadow: 2px 2px 5px rgba(1, 1, 1, 0.8);
        cursor: pointer;
    }
`