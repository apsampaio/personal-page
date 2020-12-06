import styled from 'styled-components';

interface ContainerProps {
    color: string;
}

export const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 190px;
    background: ${({ theme }) => (theme.name === "dark" ? "#44475A" : "#7678ed")};

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    border-bottom: 1px solid;
    border-bottom-color: ${props => props.color};

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;


    margin-left: 64px;
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: 500;
    color: #F8F8F2;

    line-height: 33px;
    font-family: "Roboto", sans-serif;
`;

export const Icon = styled.img`

    margin-bottom: 24px;

`;