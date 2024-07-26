import { Divider } from '@mui/material'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { ReactNode, useState } from 'react';
import { Badge } from '../types/Badge';
import { styled } from '@mui/material/styles';

interface CardStackProperties {
  title: string | ReactNode;
  badges?: Badge[];
  hasTooltip?: boolean;
}

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = window.innerHeight / 2 - element.offsetHeight / 2;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    try {
      element.classList.remove('blink');
    } catch (error) {
      return;
    }
    setTimeout(() => {
      element.classList.add('blink');
    }, 1000)
  }
};

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 250,
    fontSize: '1rem',
    fontFamily: 'Ubuntu, sans-serif',
  },
});

function CardStack({ title, badges, hasTooltip }: CardStackProperties) {

  const stacksLastIndex = Number(badges?.length) - 1;
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  return (
    <div className='flex-1 flex-wrap min-w-[12.5rem] p-2 m-2'>
      <div className='pb-5'>
        <span className='text-[1.75rem] text-onSurface-light font-medium'>{title}</span>
      </div>
      <div className='space-y-3'>
        {badges?.map((item, index) => (
          <div key={item.id}>
            <div className='flex justify-center flex-wrap pb-2'>
              <button
                className='hover:opacity-50'
                onClick={() => { 
                  setIsTooltipOpen(false)
                  scrollToElement(item.reference)}
                }
              >
                {hasTooltip && index == stacksLastIndex ?
                  <CustomTooltip 
                    title="Clique sobre as tecnologias para visualizar onde eu já usei" 
                    open={isTooltipOpen} 
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
                        ],
                      },
                    }}
                  >
                    <img className='rounded-lg' src={item.imageUrl} />
                  </CustomTooltip>
                  :
                  <img className='rounded-lg' src={item.imageUrl} />
                }
              </button>
            </div>
            {index != stacksLastIndex && <Divider />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardStack