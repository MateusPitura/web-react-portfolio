import { ReactNode } from "react";

interface EducationCardProperties {
    school: string;
    fromTo: string;
    course: string | ReactNode;
    activities?: string[]
    isLarge?: boolean
}

function EducationCard({ activities, course, fromTo, school, isLarge }: EducationCardProperties) {
    return (
        isLarge ?
            <div className='flex w-full mx-2 min-h-[400px] justify-center' >
                <div className='bg-[#d1c6a1] max-w-[600px] min-w-[400px] my-10 rounded-lg shadow-md' >
                    <div className='p-5 space-y-5'>
                        <div className='flex w-full'>
                            <span className='flex flex-1 justify-start text-[24px] text-[#3c3930]'>{school}</span>
                            <span className='flex flex-1 justify-end text-[24px] text-[#3c3930]'>{fromTo}</span>
                        </div>
                        <div>
                            <span className='flex flex-1 justify-center text-[28px] text-[#363016]'>{course}</span>
                        </div>
                        <div className='flex flex-wrap space-y-2 text-start'>
                            {activities?.map((item, index) => (
                                <span key={index} className='text-[16px] text-[#363016]'>{item}</span>
                            ))}
                        </div>
                    </div>
                </div >
            </div >
            :
            <div className='flex min-h-[200px] justify-center'>
                <div className='bg-[#d1c6a1] w-[300px] m-2 rounded-lg shadow-sm' >
                    <div className='p-3 space-y-5'>
                        <div className='flex w-full'>
                            <span className='flex flex-1 justify-start text-[16px] text-[#3c3930]'>{school}</span>
                            <span className='flex flex-1 justify-end text-[16px] text-[#3c3930]'>{fromTo}</span>
                        </div>
                        <div>
                            <span className='flex flex-1 justify-center text-[24px] text-[#363016]'>{course}</span>
                        </div>
                        <div className='flex flex-wrap space-y-2 text-start'>
                            {activities?.map((item, index) => (
                                <span key={index} className='text-[14px] text-[#363016]'>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default EducationCard;