import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppReactnativeVestibular from '../assets/images/app-reactnative-vestibular.png'
import AppReactNativeCombustivel from '../assets/images/app-reactnative-combustivel.png'
import DefaultEmptyProject from '../assets/images/default-empty-project.png'
import CardProject from '../components/CardProject'
import { badgesSkills } from '../constants/badgesSkills';

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
                        badges={[
                            badgesSkills.ReactNative,
                            badgesSkills.CSS,
                            badgesSkills.Android,
                            badgesSkills.Git,
                            badgesSkills.Figma,
                        ]}
                    />
                    <CardProject
                        title="app-reactnative-combustivel"
                        releaseYear={2023}
                        description='🚗 Meu Carro Flex é um aplicativo desenvolvido em React Native que ajuda os usuários a determinar qual combustível é mais econômico para seus veículos'
                        link='https://github.com/MateusPitura/app-reactnative-combustivel'
                        image={AppReactNativeCombustivel}
                        badges={[
                            badgesSkills.ReactNative,
                            badgesSkills.CSS,
                            badgesSkills.Android,
                            badgesSkills.Git,
                            badgesSkills.Figma,
                        ]}
                    />
                    <CardProject
                        title="api-spring-vestibular"
                        releaseYear={2024}
                        description='☁️ Este projeto consiste em uma REST API desenvolvida em Spring Boot para suportar o aplicativo Vest Info'
                        link='https://github.com/MateusPitura/api-spring-vestibular'
                        image={DefaultEmptyProject}
                        badges={[
                            badgesSkills.SpringBoot,
                            badgesSkills.Java,
                            badgesSkills.RESTfulAPI,
                            badgesSkills.Postman,
                            badgesSkills.Git,
                            badgesSkills.OCI,
                            badgesSkills.Linux,
                            badgesSkills.MySQL
                        ]}
                    />
                </Slider>
            </div>
        </div>
    )
}

export default Project;