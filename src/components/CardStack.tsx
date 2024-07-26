import { Divider } from '@mui/material'
import { ReactNode, useState } from 'react';
import { Badge } from '../types/Badge';
import Tooltip from './Tooltip'

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
                  <Tooltip open={isTooltipOpen}>
                    <img className='rounded-lg' src={item.imageUrl} />
                  </Tooltip>
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