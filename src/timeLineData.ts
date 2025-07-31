interface TimelineData {
  id: number;
  category: string;
  startYear: number;
  endYear: number;
  events: TimeEvent[];
}

interface TimeEvent {
  year: number;
  description: string;
}

export const timeLineData: TimelineData[] = [
  {
    id: 1,
    category: "Science",
    startYear: 2015,
    endYear: 2022,
    events: [
      {
        year: 2015,
        description:
          "September 13 – Partial solar eclipse visible in Southern Africa and parts of Antarctica",
      },
      {
        year: 2016,
        description:
          "The Hubble Space Telescope discovered the most distant galaxy ever observed, designated GN-z11",
      },
      {
        year: 2017,
        description:
          "Tesla officially unveiled the world’s first electric semi-truck, the Tesla Semi",
      },
      {
        year: 2018,
        description: "Successful launch and landing of the Falcon Heavy rocket",
      },
      {
        year: 2019,
        description: "First-ever photograph of a black hole in galaxy M87",
      },
      {
        year: 2020,
        description:
          "First flight of the commercial spacecraft Crew Dragon",
      },
      {
        year: 2021,
        description: "Successful landing of the Perseverance rover on Mars",
      },
      {
        year: 2022,
        description: "Launch of the James Webb Space Telescope",
      },
    ],
  },
  {
    id: 2,
    category: "Technology",
    startYear: 2010,
    endYear: 2018,
    events: [
      { year: 2010, description: "Release of the first iPad by Apple" },
      { year: 2012, description: "Launch of Instagram for Android" },
      { year: 2014, description: "Release of the Apple Watch" },
      { year: 2016, description: "Introduction of the first Tesla Model 3 cars" },
      { year: 2018, description: "Launch of 5G networks in South Korea" },
    ],
  },
  {
    id: 3,
    category: "Art",
    startYear: 2005,
    endYear: 2012,
    events: [
      { year: 2005, description: "Founding of YouTube" },
      { year: 2007, description: "Opening of the Guggenheim Museum in Abu Dhabi" },
      { year: 2010, description: 'Premiere of Christopher Nolan’s film "Inception"' },
      { year: 2012, description: "Opening of the 2012 London Olympics" },
    ],
  },
  {
    id: 4,
    category: "Sports",
    startYear: 2000,
    endYear: 2008,
    events: [
      { year: 2000, description: "Olympic Games in Sydney" },
      {
        year: 2002,
        description: "FIFA World Cup in Japan and South Korea",
      },
      { year: 2004, description: "Olympic Games in Athens" },
      { year: 2006, description: "FIFA World Cup in Germany" },
      { year: 2008, description: "Olympic Games in Beijing" },
    ],
  },
  {
    id: 5,
    category: "Medicine",
    startYear: 1998,
    endYear: 2005,
    events: [
      {
        year: 1998,
        description: "First cloning of an adult mammal",
      },
      { year: 2000, description: 'Completion of the Human Genome Project' },
      { year: 2003, description: "First successful face transplant" },
      { year: 2005, description: "Development of the first HPV vaccine" },
    ],
  },
  {
    id: 6,
    category: "Ecology",
    startYear: 1992,
    endYear: 2000,
    events: [
      {
        year: 1992,
        description: "UN Conference on Environment and Development in Rio de Janeiro",
      },
      {
        year: 1995,
        description: "First Conference of the Parties on Climate Change",
      },
      { year: 1997, description: "Signing of the Kyoto Protocol" },
      {
        year: 2000,
        description: 'Launch of the "Millennium Development Goals" program',
      },
    ],
  },
];
