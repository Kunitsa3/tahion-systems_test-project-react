import ManInGreenTracksuit from '../../assets/pictures/Man in green tracksuit.jpg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as VK } from '../../assets/svg/vk.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';

const LyleScottRussia = () => (
  <section className="gray-background">
    <div className="d-flex justify-content-center">
      <img className="margin-bottom-40" src={ManInGreenTracksuit} alt="Man in green tracksuit" />
    </div>
    <div className="container social-network-icon-wrapper">
      <h3 className="jost-500 gray-text-color mt-2">Ты — вдохновение</h3>
      <h2 className="jost-500 white-text-color">
        Делись своими моментами гордости собой. Расскажи свою историю — выкладывай фото в соцсетях с хештегом
        #lyle&scott_russia.
      </h2>
      <h3 className="jost-500 gray-text-color subtitle-spacing">Возможно, скоро её узнают тысячи людей.</h3>
      <Instagram />
      <VK />
      <Facebook />
    </div>
  </section>
);

export default LyleScottRussia;
