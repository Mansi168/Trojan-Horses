import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#3800c0' : '#29b6f6')};
    white-space: nowrap;
    color: ${({dark})=> (dark ? '#fff' : '#010606')};
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#29b6f6' : '#3800c0')};
        color: ${({dark})=> (dark ? '#010606' : '#fff')};
    }
`
