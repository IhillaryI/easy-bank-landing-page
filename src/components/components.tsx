import styled from 'styled-components'

const Btn = styled.button`
    color: #fff;
    display: block;
    background-image: linear-gradient(to right,hsl(136,65%,51%),hsl(192,70%,51%));
    padding-inline: 2rem;
    padding-block: 0.8rem;
    border-radius: 1.5rem;
    font-weight: 700;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    margin: 0 auto;

    @media (hover: hover) {
        :hover {
            filter: brightness(110%);
        }
    }

    @media (min-width: 1024px) {
        font-size: 1.2rem;

        &.footer {
            margin: 0;
            display: inline-block;
            inline-size: 200px;
            justify-self: end;
            margin-inline-start: auto;
        }
    }

    @media (min-width: 1280px) {
        margin: 0;
    }
`

export const H2 = styled.h2`
    color: hsl(233, 26%, 24%);
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 400;
    margin-block-end: 1.5rem;
    text-align: center;

    @media (min-width: 1024px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1280px) {
        text-align: left;
    }

    
`

export const H3 = styled.h3`
    color: hsl(233, 26%, 24%);
    margin-block:1rem 1.5rem;
    line-height: 1.3;
    font-weight: 400;
    font-size: 1.5rem;

    @media (min-width: 1024px) {
        font-size: 2rem;
    }

    @media (min-width: 1300px) {
        font-size: 1.4rem;
    }
`

export const P = styled.p`
    font-size: .9rem;
    line-height: 2;
    font-weight: 400;
    padding-inline: 1rem;
    margin-block-end: 2rem;
    color: #616164;

    &.ph3 {
        padding-inline: 0;
    }

    @media (min-width: 1024px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1280px) {
        &.intro, &.mid {
            padding-inline: 0;
        }
        &.mid {
            text-align: left;
            inline-size: 50%;
        }
    }

    @media (min-width: 1300px) {
       font-size: 1rem;
    }


`

export default Btn;