const DiscountNotification = () => (
  <section className="container margin-bottom-32">
    <p className="jost-500 primary-text text-center discount-notification margin-bottom-12">
      Скидка 10% за подписку на наши новости
    </p>
    <div className="d-flex justify-content-center">
      <input className="email-input jost-400 primary-text" placeholder="Введите свой email " />
      <button className="jost-400 secondary-text subscribe-button">Подписаться</button>
    </div>
  </section>
);

export default DiscountNotification;
