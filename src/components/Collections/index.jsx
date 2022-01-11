import { PrimaryParagraph } from '../Paragraph';
import { ReactComponent as ArrowIcon } from './arrowIcon.svg';

const Collections = () => (
  <section className="collection-margin-top">
    <h2 className="jost-500 padding-left-20 margin-bottom-40">
      Посмотри, что мы вкладываем в понятие гордости быть собой. Познакомься со знаковыми моделями и новыми коллекциями
      бренда.
    </h2>
    <div className="linear-gradient-background d-flex margin-bottom-40 position-relative first-split-section">
      <div className="collection-description-right-text d-flex flex-column justify-content-between">
        <div>
          <h2 className="jost-500">CASUALS</h2>
          <PrimaryParagraph>
            Вдохновение коллекции — субкультурные футбольные движения, их дух, страсть и смелость. Для тех, кто готов
            выделиться из толпы. Яркие акценты в твоём гардеробе: парки, рубашки, жакеты и аксессуары. Покажи, чем ты
            живёшь, покажи, что тебя зажигает.
          </PrimaryParagraph>
        </div>
        <ArrowIcon />
      </div>
    </div>
    <div className="collection-spacing margin-bottom-40">
      <h2 className="jost-500 margin-bottom-12">VINTAGE</h2>
      <PrimaryParagraph className="margin-bottom-40">
        Основная lifestyle-коллекция, в которой виден характер бренда. Выпущенная в 2002 году, она стала качественной
        базой гардероба современного мужчины. Легкие футболки, поло, рубашки, пуловеры и верхняя одежда — всё, что нужно
        для завершённого образа.
      </PrimaryParagraph>
      <ArrowIcon />
    </div>
    <div className="linear-gradient-background d-flex justify-content-end position-relative second-split-section">
      <div className="position-absolute collection-description-left-text d-flex flex-column justify-content-between">
        <div>
          <h2 className="jost-500">ARCHIVE</h2>
          <PrimaryParagraph>
            Стильные 50-е в современном прочтении Lyle&Scott: ретроспектива или новый взгляд на образ современного
            джентльмена? Классические принты, приглушённые оттенки и свободные силуэты. Собери свой стильный и
            универсальный образ, который будет отражать тебя.
          </PrimaryParagraph>
        </div>
        <ArrowIcon />
      </div>
    </div>
    <div className="d-flex position-relative third-split-section">
      <div className="collection-description-right-text d-flex flex-column justify-content-between">
        <div>
          <h2 className="jost-500">WOMENSWEAR</h2>
          <PrimaryParagraph>
            Качественная база на каждый день для девушек, которые думают не только о стиле, но и об экологии — более 90%
            коллекции состоит из органического хлопка и переработанного нейлона. Комфортная одежда для занятий спортом,
            базовые модели, купальники и аксессуары.
          </PrimaryParagraph>
        </div>
        <ArrowIcon />
      </div>
    </div>
    <div className="linear-gradient-background d-flex justify-content-end position-relative fourth-split-section">
      <div className="collection-description-left-text d-flex flex-column justify-content-between">
        <div>
          <h2 className="jost-500">BLACK EAGLE</h2>
          <PrimaryParagraph>
            Коллекция из премиальных тканей для тех, кто ценит качество высшего класса. Отшивается на фабриках в
            Великобритании и Италии традиционным способом. Одежда для исключительных случаев, ведь каждый день твоей
            жизни — уникален и неповторим.
          </PrimaryParagraph>
        </div>
        <ArrowIcon></ArrowIcon>
      </div>
    </div>
    <div className="collection-spacing light-gray-background">
      <h2 className="jost-500 margin-bottom-12">SPORT</h2>
      <PrimaryParagraph className="margin-bottom-40">
        Быть собой в каждом моменте. Побеждать и преодолевать себя, ставить новые цели, играть в команде и быть сильнее.
        Специальные технологии и материалы позволили нам создать лучшие модели для комфортных тренировок. Оставайся
        верен своему стилю в любой ситуации.
      </PrimaryParagraph>
      <ArrowIcon />
    </div>
  </section>
);

export default Collections;
