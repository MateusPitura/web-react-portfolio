import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';

const TooltipStyled = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 250,
        fontSize: '1rem',
        fontFamily: 'Ubuntu, sans-serif',
    },
});

interface CustomTooltipProperties {
    children: ReactElement;
    open: boolean;
}

export default function CustomTooltip({ open, children }: CustomTooltipProperties) {

    return (
        <TooltipStyled
            title="Clique sobre as tecnologias para visualizar onde eu já usei"
            open={open}
            placement='bottom-end'
            arrow
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -5],
                            },
                        },
                        {
                            name: 'flip',
                            options: {
                                fallbackPlacements: [],
                            },
                        },
                    ],
                },
            }}
        >
            {children}
        </TooltipStyled>
    )
}
