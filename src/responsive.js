import { css } from "styled-components"

export const mobile = (props) => {
    return (
        css`
            @media only screen and (max-width: 550px) {
                ${props}
            }
        `
    )
}

export const tablet = (props) => {
    return (
        css`
            @media (min-width:551px) and (max-width: 768px){
                ${props}
            }
        `
    )
}

export const Laptop = (props) => {
    return (
        css`
            @media (min-width: 769px) and (max-width:1024px){
                ${props}
            }
        `
    )
}

export const Desktop = (props) => {
    return (
        css`
            @media (min-width: 1025px) and (max-width:1440px){
                ${props}
            }
        `
    )
}

export const K4 = (props) => {
    return (
        css`
            @media (min-width: 1441px) and (max-width:2560px){
                ${props}
            }
        `
    )
}