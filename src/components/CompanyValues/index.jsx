import { Accordion, useAccordionButton } from 'react-bootstrap';
import { PrimaryParagraph } from '../Paragraph';

const valuesAccordion = [
  {
    title: 'УВАЖЕНИЕ К НАСЛЕДИЮ',
    description: `Наш фундамент был заложен почти 150 лет назад, а наша история творится сегодня. Мы гордимся прошлым и остаёмся верными своему образу, который десятилетиями формировали основатели, друзья и клиенты Lyle & Scott.`,
  },
  {
    title: 'СТРЕМЛЕНИЕ К НОВОМУ',
    description: `Инновации — часть ДНК бренда Lyle & Scott. Мы раздвигаем границы, ищем новые решения, остаёмся любопытными и жадными на эмоции. Мы всегда стремимся знать больше, чтобы предложить тебе лучшее.`,
  },
  {
    title: 'КАЧЕСТВО',
    description: `Бренд Lyle & Scott ценят за высокое качество самые разные люди по всему миру: спортсмены Грег Норман и Криштиану Роналду, актёры Боб Хоуп и Шон Коннери, музыканты Arctic Monkeys и Red Hot Chili Peppers. А также утешественники и представители молодёжной культуры.`,
  },
  {
    title: 'ЧЕСТНОСТЬ',
    description: `Мы верим в успех своего дела, ридерживаемся принципов честности и открытости. Это позволяет нам прокладывать свой уникальный путь, справляться с трудностями и делиться вдохновляющими историями больших и маленьких побед.`,
  },
  {
    title: 'ОТКРЫТОСТЬ',
    description: `Наши ценности, культура и философия открыта для каждого. Мы придерживаемся принципов разнообразия и вовлеченности, ведь Lyle & Scott соткан из самых разных историй, которые делают его уникальным.`,
  },
];

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return <div onClick={decoratedOnClick}>{children}</div>;
}

const CompanyValues = () => (
  <section className="light-gray-background company-values-wrapper">
    <h2 className="jost-500">ЦЕННОСТИ</h2>
    <PrimaryParagraph className="mt-3 margin-bottom-40">
      Пару слов о ценностях тк тут пустовато
      <br />
      Желательно, чтобы текст был на две строчки
    </PrimaryParagraph>

    <Accordion flush id="values-accordion">
      {valuesAccordion.map(({ title, description }, index) => (
        <Accordion.Item eventKey={index} key={index} className="mb-2">
          <Accordion.Header>
            <p className="jost-500">{title}</p>
          </Accordion.Header>
          <Accordion.Body>
            <CustomToggle eventKey={index}>
              <div className="jost-400 primary-text">{description}</div>
            </CustomToggle>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </section>
);

export default CompanyValues;
