import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppReactnativeVestibular from '../assets/images/app-reactnative-vestibular.webp'
import AppReactNativeCombustivel from '../assets/images/app-reactnative-combustivel.webp'
import DefaultEmptyProject from '../assets/images/default-empty-project.webp'
import CardProject from '../components/CardProject'
import { badgesSkills } from '../constants/badgesSkills';
import { useTranslation } from 'react-i18next';

function Project() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const { t } = useTranslation();

    return (
        <div className='flex min-h-[50rem] bg-primary-light p-2 w-full justify-center items-center'>
            <div className='w-[85%] md:w-[80%]'>
                <Slider {...settings}>
                    <CardProject
                        title="app-reactnative-vestibular"
                        image={AppReactnativeVestibular}
                        releaseYear={2024}
                        link='https://github.com/MateusPitura/app-reactnative-vestibular'
                        description={t('PROJECT.VESTIBULAR')}
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
                        description={t('PROJECT.COMBUSTIVEL')}
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
                        description={t('PROJECT.API')}
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