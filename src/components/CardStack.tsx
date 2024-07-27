import { Divider } from '@mui/material'
import { ReactNode, RefObject } from 'react';
import { Badge } from '../types/Badge';
import Tooltip from './Tooltip'
import Slider from 'react-slick';

interface CardStackProperties {
  title: string | ReactNode;
  badges?: Badge[];
  sliderRef: RefObject<Slider>;
  isTooltipOpen?: boolean;
  setIsTooltipOpen: (state: boolean) => void;
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

function CardStack({ title, badges, sliderRef, isTooltipOpen, setIsTooltipOpen }: CardStackProperties) {

  const stacksLastIndex = Number(badges?.length) - 1;

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
    }
  }

  return (
    <div className='flex-1 flex-wrap min-w-[12.5rem] p-2 m-2'>
      <div className='pb-5'>
        <span className='text-[1.75rem] text-onSurface-light dark:text-onSurface-dark font-medium'>{title}</span>
      </div>
      <div className='space-y-3'>
        {badges?.map((item, index) => (
          <div key={item.id}>
            <div className='flex justify-center flex-wrap pb-2'>
              <button
                className='hover:opacity-50'
                onClick={() => {
                  setIsTooltipOpen(false)
                  if (typeof item?.sliderIndex === 'number') {
                    goToSlide(item.sliderIndex)
                  }
                  scrollToElement(item.reference)
                }
                }
              >
                {index == stacksLastIndex && isTooltipOpen ?
                  <Tooltip open={isTooltipOpen}>
                    <img className='rounded-lg' src={item.imageUrl} />
                  </Tooltip>
                  :
                  <img className='rounded-lg' src={item.imageUrl} />
                }
              </button>
            </div>
            {index != stacksLastIndex && <Divider className='bg-surface-light dark:bg-outline-light' />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardStack