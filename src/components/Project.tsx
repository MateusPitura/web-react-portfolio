import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppReactnativeVestibular from '../assets/images/app-reactnative-vestibular.png'
import AppReactNativeCombustivel from '../assets/images/app-reactnative-combustivel.png'
import DefaultEmptyProject from '../assets/images/default-empty-project.png'
import CardProject from '../components/CardProject'

function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='flex min-h-[800px] bg-[#43664E] p-2 w-full justify-center items-center'>
            <div className='w-[80%]'>
                <Slider {...settings}>
                    <CardProject
                        title="app-reactnative-vestibular"
                        image={AppReactnativeVestibular}
                        releaseYear={2024}
                        link='https://github.com/MateusPitura/app-reactnative-vestibular'
                        description='📆 O Vest Info é um aplicativo desenvolvido em React Native projetado para fornecer uma forma conveniente para acompanhar notícias e datas de vestibulares'
                        badgesLinks={[
                            'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', //React Native
                            'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', //CSS
                            'https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white', // Android
                            'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', //GIT
                            'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', //Figma
                        ]}
                    />
                    <CardProject
                        title="app-reactnative-combustivel"
                        releaseYear={2023}
                        description='🚗 Meu Carro Flex é um aplicativo desenvolvido em React Native que ajuda os usuários a determinar qual combustível é mais econômico para seus veículos'
                        link='https://github.com/MateusPitura/app-reactnative-combustivel'
                        image={AppReactNativeCombustivel}
                        badgesLinks={[
                            'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', //React Native
                            'https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white', //CSS
                            'https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white', // Android
                            'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', //GIT
                            'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', //Figma
                        ]}
                    />
                    <CardProject
                        title="api-spring-vestibular"
                        releaseYear={2024}
                        description='☁️ Este projeto consiste em uma REST API desenvolvida em Spring Boot para suportar o aplicativo Vest Info'
                        link='https://github.com/MateusPitura/api-spring-vestibular'
                        image={DefaultEmptyProject}
                        badgesLinks={[
                            'https://img.shields.io/badge/spring boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white', //Spring Boot
                            'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',  //Java
                            'https://img.shields.io/badge/RESTful API-2F3134?style=for-the-badge', //RESTFUL API
                            'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white', //POSTMAN
                            'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', //GIT
                            'https://img.shields.io/badge/OCI-F80000?style=for-the-badge&logo=oracle&logoColor=white', //OCI
                            'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black', //LINUX
                            'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white', //MySQL

                        ]}
                    />
                </Slider>
            </div>
        </div>
    )
}

export default Project;