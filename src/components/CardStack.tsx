import { Divider } from '@mui/material'
import { ReactNode } from 'react';
import { Badge } from '../types/Badge';

interface CardStackProperties {
    title: string | ReactNode;
    badges?: Badge[];
}

function CardStack({ title, badges }: CardStackProperties) {

    const stacksLastIndex = Number(badges?.length) - 1;

    return (
        <div className='flex-1 flex-wrap min-w-[12.5rem] p-2 m-2'>
            <div className='pb-5'>
                <span className='text-[1.75rem] text-onSurface-light font-medium'>{title}</span>
            </div>
            <div className='space-y-3'>
                {badges?.map((item, index) => (
                    <div key={item.id}>
                        <div className='flex justify-center flex-wrap pb-2'>
                            <a className='hover:opacity-50' target='_self' href={`#${item.reference}`}>
                                <img className='rounded-lg' src={item.imageUrl} />
                            </a>
                        </div>
                        {index != stacksLastIndex && <Divider />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardStack