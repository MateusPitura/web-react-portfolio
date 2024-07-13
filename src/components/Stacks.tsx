import CardStack from '../components/CardStack'

function Stacks() {
    return (
        <div className='flex min-h-[800px] w-full justify-center p-2 py-10'>
            <div className='flex w-[60%] flex-wrap'>
                <CardStack
                    title='Front-End'
                    stacks={['React', 'TypeScript', 'JavaScript', 'Tailwind', 'CSS', 'HTML']}
                />
                <CardStack
                    title='Back-End'
                    stacks={['Spring Boot', 'Java', 'RESTful API']}
                />
                <CardStack
                    title='DevOps'
                    stacks={['OCI', 'AWS', 'Git', 'Linux']}
                />
                <CardStack
                    title='Database'
                    stacks={['MySQL', 'Oracle']}
                />
                <CardStack
                    title='Mobile'
                    stacks={['React Native']}
                />
                <CardStack
                    title='Others'
                    stacks={['Figma', 'C', 'Postman', 'Python', 'Unity']}
                />
                <CardStack
                    title=''
                />
                <CardStack
                    title=''
                />
            </div>
        </div>
    )
}

export default Stacks;