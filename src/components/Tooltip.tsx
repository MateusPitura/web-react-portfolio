import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    return (
        <TooltipStyled
            title={
                <span className='font-customUbuntu'>
                    {t('STACKS.TOOLTIP')}
                </span>
            }
            open={open}
            placement='bottom-end'
            arrow
            disableInteractive
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
