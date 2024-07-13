import { Divider } from '@mui/material'
import { ReactNode } from 'react';

interface CardStackProperties {
    title: string | ReactNode;
    stacksLink?: string[];
}

function CardStack({ title, stacksLink }: CardStackProperties) {

    const stacksLastIndex = Number(stacksLink?.length) - 1;

    return (
        <div className='flex-1 flex-wrap min-w-[200px] p-5 m-5'>
            <div className='pb-5'>
                <span className='text-[28px] text-[#1e1b13]'>{title}</span>
            </div>
            <div className='space-y-3'>
                {stacksLink?.map((item, index) => (
                    <div key={index}>
                        <div className='flex justify-center flex-wrap pb-2'>
                            <img src={item} />
                        </div>
                        {index != stacksLastIndex && <Divider />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardStack