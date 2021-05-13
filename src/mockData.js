export const mockData = [
    {
        id: '1',
        year: '2001',
        title: 'Spirited Away',
        category: 'Animation',
        image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg',
        rating: '4.1',
        overview: 'Oscar Winning Movie',
        description: 'Spirited Away (Japanese: 千と千尋の神隠し, Hepburn: Sen to Chihiro no Kamikakushi, "Sen and Chihiro’s Spiriting Away") is a 2001 Japanese animated fantasy film written and directed by Hayao Miyazaki, animated by Studio Ghibli for Tokuma Shoten, Nippon Television Network, Dentsu, Buena Vista Home Entertainment, Tohokushinsha Film, and Mitsubishi.[6] The film stars Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takeshi Naito, Yasuko Sawaguchi, Tsunehiko Kamijō, Takehiko Ono, and Bunta Sugawara. Spirited Away tells the story of Chihiro Ogino (Hiiragi), a 10-year-old girl who, while moving to a new neighbourhood, enters the world of Kami (spirits of Japanese Shinto folklore).[7] After her parents are turned into pigs by the witch Yubaba (Natsuki), Chihiro takes a job working in Yubaba\'s bathhouse to find a way to free herself and her parents and return to the human world.',
        duration: '125 min'
    },
    {
        id: '2',
        year: '2002',
        title: 'Spirited Away 2',
        category: 'Animation',
        image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg',
        rating: '4.2'
    },
    {
        id: '3',
        year: '2003',
        title: 'Spirited Away 3',
        category: 'Animation',
        image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg',
        rating: '4.3'
    },
    {
        id: '4',
        year: '2004',
        title: 'Spirited Away 4',
        category: 'Animation',
        image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg',
        rating: '4.4'
    },
    {
        id: '5',
        year: '2005',
        title: 'Spirited Away 5',
        category: 'Animation',
        image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg',
        rating: '4.5'
    },
    {
        id: '6',
        year: '2006',
        title: 'Spirited Away 6',
        category: 'Animation',
        image: 'https://neilmc74.files.wordpress.com/2010/03/spirited-away-2.jpg',
        rating: '4.6'
    }
];

export const getMovieById = (id) => {
    return mockData.find(film => film.id === id);
};