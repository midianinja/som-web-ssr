import React from 'react';
import { CarouselPrimary } from '../../../../molecules/carousel-primary/carouselPrimary';
import { CarouselSecondary } from '../../../../molecules/carousel-secondary/carouselSecondary';
import { DashboardContent, CarouselPrimarySection, CarouselSecondarySection } from './dashboard.style';

const DashBoard = () => (
    <DashboardContent>
      
        <CarouselPrimarySection>
            <CarouselPrimary />
        </CarouselPrimarySection>


        <CarouselSecondarySection>
            <CarouselSecondary />
        </CarouselSecondarySection>

    </DashboardContent>
)

export default DashBoard;