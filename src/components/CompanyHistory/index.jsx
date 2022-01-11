import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import clsx from 'clsx';
import { PrimaryParagraph } from '../Paragraph';
import ProductionOfKnitwear from '../../assets/pictures/1870.jpg';
import ChristianDior from '../../assets/pictures/1950.jpg';
import GregNorman from '../../assets/pictures/1960.jpg';
import ObtainingRoyalWarrant from '../../assets/pictures/1975.jpg';
import LyleScottEuropeanFootball from '../../assets/pictures/1980.jpg';
import VintageCollection from '../../assets/pictures/2000.jpg';
import LyleScottToday from '../../assets/pictures/2021.jpg';

const carouselItems = [
  {
    imageSrc: ProductionOfKnitwear,
    imgAlt: 'Production of knitwear',
    title: '1870',
    description: `Уильям Лайл и Уолтер Скотт основали компанию по производству трикотажных вещей. Так родился Lyle & Scott.`,
  },
  {
    imageSrc: ChristianDior,
    imgAlt: 'Christian Dior',
    title: '1950',
    description: `Коллаборация с Christian Dior. Бренд подтвердил свое мастерство и статус эксперта в производстве трикотажа.`,
  },
  {
    imageSrc: GregNorman,
    imgAlt: 'Greg Norman',
    title: '1960',
    description: `Инновационная коллекция для игры в гольф — практичность и стиль были признаны лучшими мировыми игроками.`,
  },
  {
    imageSrc: ObtainingRoyalWarrant,
    imgAlt: 'Obtaining Royal Warrant',
    title: '1975',
    description: `Бренд получает Royal Warrant — Королевский орден от герцога Эдинбургского.`,
  },
  {
    imageSrc: LyleScottEuropeanFootball,
    imgAlt: 'Lyle & Scott and european football',
    title: '1980',
    description: `Lyle & Scott покорил новый вид спорта. Субкультурные движения европейского футбола выбрали марку в
    качестве своего культурного кода.`,
  },
  {
    imageSrc: VintageCollection,
    imgAlt: 'Vintage collection',
    title: '2000',
    description: ` Запуск коллекции Vintage, сопряженной с indie-субкультурой. Бренд обрел мегапопулярность в среде
    британской молодежи.`,
  },
  {
    imageSrc: LyleScottToday,
    imgAlt: 'Lyle & Scott today',
    title: '2021',
    description: ` Lyle & Scott сегодня — это сочетание премиальных материалов и стиля, который отражает индивидуальность
    во всех проявлениях.`,
  },
];

const CompanyHistory = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="horizontal-padding-20 mb-3">
      <h2 className="jost-500">ПОЧТИ 150 ЛЕТ НАСЛЕДИЯ</h2>
      <p className="primary-text jost-400 mb-2">
        У каждой великой истории есть начало. Наша стартовала в 1874 году в шотландском городе Хоик. Тогда основатели
        Уильям Лайл и Уолтер Скотт взяли ссуду в размере 800 фунтов и открыли небольшую фабрику по производству
        трикотажных вещей. С самого основания бренд сделал ставку на высокое качество и эффективные технологии.
      </p>
      <p className="primary-text jost-400 mt-1 margin-bottom-40">
        В начале пути Уильям Лайл сформулировал мантру: «хорошая работа — больше работы». Она отразилась на всей истории
        бренда. Популярность одежды Lyle & Scott быстро росла, а уже к 1910 году объём производства увеличился в 3 раза.
      </p>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        id="companyHistoryCarousel"
        interval={null}
        nextIcon={
          <span
            aria-hidden="true"
            className={clsx('carousel-control-next-icon', index === carouselItems.length - 1 && 'disabled')}
          />
        }
        prevIcon={<span aria-hidden="true" className={clsx('carousel-control-prev-icon', index === 0 && 'disabled')} />}
      >
        {carouselItems.map(({ imageSrc, imgAlt, title, description }, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={imageSrc} alt={imgAlt} />
            <Carousel.Caption>
              <h5>{title}</h5>
              <PrimaryParagraph>{description}</PrimaryParagraph>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CompanyHistory;
