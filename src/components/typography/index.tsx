import styled, { ThemeConsumer } from 'styled-components';
import { Variant4 } from '../../app/theme/styled';

type ITypography = {
    color?: Variant4,
    as?: string;
    size?: number;
    weight?: number;
    children: any;
    [x: string]: any;
};

export const Typography = ({
    size = 14,
    weight = 400,
    as = 'span',
    color = 1,
    children,
  ...rest
}: ITypography) => {
    if (as === 'p')
        return (
            <Typo size={size} weight={weight} colour={color} as="p" {...rest}>{children}</Typo>
        )
    return (
        <Typo size={size} weight={weight} colour={color} {...rest}>{children}</Typo>
    )
};

const Typo = styled.span<{
    size: number;
    colour: Variant4;
    weight?: number;
}>`
    font-weight: ${p => p.weight};
    font-size: ${p => p.size}px;
    color: ${({ theme, colour }) => theme.color.text[colour]};
`;