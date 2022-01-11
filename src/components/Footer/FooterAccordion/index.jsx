import { Accordion } from 'react-bootstrap';

const footerAccordion = [
  {
    title: 'ЗАБОТА О КЛИЕНТАХ',
    body: ['Контакты', 'FAQ', 'Доставка, оплата и возврат', 'Конфиденциальность', 'Персональные данные'],
  },
  {
    title: 'ВСË О LYLE & SCOTT',
    body: ['О компании', 'Магазины', 'Вакансии', 'Коллекции'],
  },
  {
    title: 'КАТАЛОГ',
    body: ['Мужчинам', 'Женщинам', 'Аксессуары', 'Новинки', 'Sale'],
  },
];

const FooterAccordion = () => (
  <Accordion flush id="footer-accordion">
    {footerAccordion.map(({ title, body }, index) => (
      <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {body.map((text, innerIndex) => (
            <p className="primary-text" key={innerIndex}>
              {text}
            </p>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

export default FooterAccordion;
