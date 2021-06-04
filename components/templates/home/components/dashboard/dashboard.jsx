import React from 'react';
import { CarouselPrimary } from '../../../../molecules/carousel-primary/carouselPrimary';
import { CarouselSecondary } from '../../../../molecules/carousel-secondary/carouselSecondary';
import { Carousel } from '../../../../molecules/carousel/carousel';
import { DashboardContent, CarouselPrimarySection, TextOportunidades, Section } from './dashboard.style';

const DashBoard = () => (
    <DashboardContent>

        <CarouselPrimarySection>
            <CarouselPrimary />
        </CarouselPrimarySection>


        <TextOportunidades> Últimas oportunidades adicionadas 🚀 </TextOportunidades>

        <Section>
            <CarouselSecondary />
        </Section>

        <TextOportunidades> Oportunidades para artistas 🎸 </TextOportunidades>
        <Section>
            <Carousel />

        </Section>

        <TextOportunidades> Oportunidades para produtores 💻 </TextOportunidades>
        <Section>
            <Carousel />

        </Section>

        <TextOportunidades> Notícias ✨ </TextOportunidades>
        <Section>
            <Carousel />

        </Section>



    </DashboardContent>
)

export default DashBoard;