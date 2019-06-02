import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Technologia dawniej a dzis",
        author: "Jan Nowak",
        text: "1111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"
    },
    {
        id: 2,
        title: "Rozwoj technologii",
        author: "Ania Kwiatkowska",
        text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    },
    {
        id: 3,
        title: "Komputer najlepsze narzedzie pracy",
        author: "Jan Kowalski",
        text: "4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
    }
]


const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;