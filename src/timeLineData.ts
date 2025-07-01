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
    category: 'Наука',
    startYear: 2015,
    endYear: 2022,
    events: [
      { year: 2015, description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
      { year: 2016, description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
      { year: 2017, description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
      { year: 2018, description: 'Успешный запуск и посадка ракеты Falcon Heavy' },
      { year: 2019, description: 'Первая фотография черной дыры в галактике M87' },
      { year: 2020, description: 'Первый полет коммерческого космического корабля Crew Dragon' },
      { year: 2021, description: 'Успешная посадка марсохода Perseverance на Марс' },
      { year: 2022, description: 'Запуск космического телескопа James Webb' }
    ]
  },
  {
    id: 2,
    category: 'Технологии',
    startYear: 2010,
    endYear: 2018,
    events: [
      { year: 2010, description: 'Выпуск первого iPad от Apple' },
      { year: 2012, description: 'Запуск Instagram для Android' },
      { year: 2014, description: 'Выпуск Apple Watch' },
      { year: 2016, description: 'Появление первых автомобилей Tesla Model 3' },
      { year: 2018, description: 'Запуск 5G сетей в Южной Корее' }
    ]
  },
  {
    id: 3,
    category: 'Искусство',
    startYear: 2005,
    endYear: 2012,
    events: [
      { year: 2005, description: 'Основание YouTube' },
      { year: 2007, description: 'Открытие музея Гуггенхайма в Абу-Даби' },
      { year: 2010, description: 'Премьера фильма "Начало" Кристофера Нолана' },
      { year: 2012, description: 'Открытие Лондонской Олимпиады 2012' }
    ]
  },
  {
    id: 4,
    category: 'Спорт',
    startYear: 2000,
    endYear: 2008,
    events: [
      { year: 2000, description: 'Олимпийские игры в Сиднее' },
      { year: 2002, description: 'Чемпионат мира по футболу в Японии и Южной Корее' },
      { year: 2004, description: 'Олимпийские игры в Афинах' },
      { year: 2006, description: 'Чемпионат мира по футболу в Германии' },
      { year: 2008, description: 'Олимпийские игры в Пекине' }
    ]
  },
  {
    id: 5,
    category: 'Медицина',
    startYear: 1998,
    endYear: 2005,
    events: [
      { year: 1998, description: 'Первое клонирование взрослого млекопитающего' },
      { year: 2000, description: 'Завершение проекта "Геном человека"' },
      { year: 2003, description: 'Первая успешная трансплантация лица' },
      { year: 2005, description: 'Разработка первой вакцины против ВПЧ' }
    ]
  },
  {
    id: 6,
    category: 'Экология',
    startYear: 1992,
    endYear: 2000,
    events: [
      { year: 1992, description: 'Конференция ООН по окружающей среде в Рио-де-Жанейро' },
      { year: 1995, description: 'Первая Конференция сторон по изменению климата' },
      { year: 1997, description: 'Подписание Киотского протокола' },
      { year: 2000, description: 'Запуск программы "Цели развития тысячелетия"' }
    ]
  }
];