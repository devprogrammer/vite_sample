import styled from "styled-components"

interface IconWrapperPropsType {
    icon: JSX.Element | null,
    width?: number,
    height?: number,
}

export const IconWrapper: React.FC<IconWrapperPropsType> = ({ icon, width=38, height=38 }) => {
    return (
        <Wrapper width={width} height={height}>
            {icon}
        </Wrapper>
    )
}

const Wrapper = styled.div<{
    width: number,
    height: number,
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    background-color: ${({ theme }) => theme.color.bg[3]};
    border-radius: 6px;
`