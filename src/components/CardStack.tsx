import { Divider } from '@mui/material'
import { ReactNode } from 'react';

interface CardStackProperties {
    title: string | ReactNode;
    stacks?: string[];
}

function CardStack({ title, stacks }: CardStackProperties) {
    return (
        <div className='flex-1 flex-wrap min-w-[200px] p-5 m-5'>
            <div className='pb-5'>
                <span className='text-[28px] text-[#1e1b13]'>{title}</span>
            </div>
            <div className='space-y-5'>
                {stacks?.map(item => (
                    <div>
                        <span className='text-[16px] text-[#1e1b13]'>{item}</span>
                        <Divider />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardStack