import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppReactnativeVestibular from '../assets/images/app-vestibular-small.webp'
import AppReactNativeCombustivel from '../assets/images/app-combustivel-small.webp'
import CardProject from '../components/CardProject'
import { badgesSkills } from '../constants/badgesSkills';
import { useTranslation } from 'react-i18next';
import { RefObject } from 'react';

interface ProjectProperties {
    sliderRef: RefObject<Slider>;
}

function Project({sliderRef}: ProjectProperties) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const { t } = useTranslation();

    return (
        <section className='flex min-h-[50rem] bg-primary-light p-2 w-full justify-center items-center'>
            <div className='w-[85%] md:w-[80%]'>
                <Slider ref={sliderRef} {...settings}>
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
        </section>
    )
}

export default Project;