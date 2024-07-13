import CardStack from '../components/CardStack'

function Stacks() {
    return (
        <div className='flex min-h-[800px] w-full justify-center p-2 py-10'>
            <div className='flex w-[60%] flex-wrap'>
                <CardStack
                    title='Front-End'
                    stacksLink={[
                        'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', 
                        'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white', 
                        'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E', 
                        'https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white', 
                        'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', 
                        'https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
                    ]}
                />
                <CardStack
                    title='Back-End'
                    stacksLink={[
                        'https://img.shields.io/badge/spring boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white', 
                        'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white', 
                        'https://img.shields.io/badge/RESTful API-2F3134?style=for-the-badge',
                        'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white',
                    ]}
                />
                <CardStack
                    title='DevOps'
                    stacksLink={[
                        'https://img.shields.io/badge/OCI-F80000?style=for-the-badge&logo=oracle&logoColor=white', 
                        'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white', 
                        'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', 
                        'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black'
                    ]}
                />
                <CardStack
                    title='Database'
                    stacksLink={[
                        'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white', 
                        'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white'
                    ]}
                />
                <CardStack
                    title='Mobile'
                    stacksLink={[
                        'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
                        'https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white'
                    ]}
                />
                <CardStack
                    title='Others'
                    stacksLink={[
                        'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', 
                        'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white', 
                        'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54', 
                        'https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white'
                    ]}
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