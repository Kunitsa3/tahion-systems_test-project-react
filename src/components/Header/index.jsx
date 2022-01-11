import { ReactComponent as Hamburger } from './hamburger.svg';
import { ReactComponent as Loupe } from './loupe.svg';
import { ReactComponent as Eagle } from './eagle.svg';
import { ReactComponent as Favorites } from './favorites.svg';
import { ReactComponent as Cart } from './cart.svg';

export const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center py-2 px-4">
      <div>
        <Hamburger />
        <Loupe />
      </div>
      <Eagle />
      <div className="d-flex">
        <div className="d-flex align-items-center position-relative">
          <Favorites />
          <div className="d-flex justify-content-center align-items-center position-absolute counter-wrapper likes-counter-position">
            <p className="jost-500 counter mb-0">2</p>
          </div>
        </div>
        <div className="d-flex align-items-center position-relative">
          <Cart />
          <div className="d-flex justify-content-center align-items-center position-absolute counter-wrapper cart-counter-position">
            <p className="jost-500 counter mb-0">5</p>
          </div>
        </div>
      </div>
    </header>
  );
};
