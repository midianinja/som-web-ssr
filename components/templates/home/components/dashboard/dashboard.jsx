import React, { useEffect, useState, useContext } from 'react';
import { CarouselHighlight } from '../../../../molecules/carousel-highlight/carousel-highlight';
import { CarouselLatest } from '../../../../molecules/carousel-latest/carousel-latest';
import { CarouselProducers } from '../../../../molecules/carousel-producers/carousel-producers';
import { CarouselArtists } from '../../../../molecules/carousel-artists/carousel-artists';
import { CarouselNews } from '../../../../molecules/carousel-news/carousel-news';
import { init } from '../../home.controller';


import { DashboardContent, CarouselPrimarySection, TextOportunidades, Section } from './dashboard.style';
import { getNews } from '../../home.controller';
import { getAllHighlightedOportunities } from '../../home.controller';


const DashBoard = () => {
   
    const [highlightedOportunities, setHighlightedOportunities] = useState({});
    // const [highlightedOportunitiesLoading, setHighlightedOportunitiesLoading] = useState([]);
    const [news, setNews] = useState([]);
    // const [newsLoading, setNewsLoading] = useState([]);


    useEffect(() => {
        init({
            // setCommunityUsers,
            // setCommunityUsersLoading,
            setHighlightedOportunities,
            // setNewsLoading
        }),
        getNews({
            setNews
        }),
        getAllHighlightedOportunities({
            setHighlightedOportunities
        })
    }, []);

    console.log(highlightedOportunities)


    return (
        <DashboardContent>

            <CarouselPrimarySection>
                <CarouselHighlight highlightedOportunities={highlightedOportunities}
                />
            </CarouselPrimarySection>


            <TextOportunidades> Últimas oportunidades adicionadas 🚀 </TextOportunidades>

            <Section>
                <CarouselLatest opportunity={news}/>
            </Section>

            <TextOportunidades> Oportunidades para artistas 🎸 </TextOportunidades>
            <Section>
                <CarouselArtists />
            </Section>

            <TextOportunidades> Oportunidades para produtores 💻 </TextOportunidades>
            <Section>
                <CarouselProducers />
            </Section>

            <TextOportunidades> Notícias ✨ </TextOportunidades>
            <Section>
                <CarouselNews news={news}/>
            </Section>



        </DashboardContent>
    );
}

export default DashBoard;