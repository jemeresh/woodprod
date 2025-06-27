import { Link } from 'react-router-dom';
import '../assets/styles/home.scss';
import image0 from '../assets/images/home/image.png';

const HomePage = ( ) => {
  return (
    <>
    <div className="home-wrapper">
    <div className = "home-imag">
      <div className="overlay"></div>
      <div className="main-screen">
        <div className="H1"><div className='main-font'>
            <span>SOLID</span><br />
            <span>WOOD</span><br />
            <span>PRODUCTS</span>
          </div>
        <div className="H2">
          <span className="thin">Дуб, береза, ясень от <br/></span>
          <span className="bold">6800RUB</span>
          <span className="thin"> за м3</span>
        </div>
        <button className="button">Заказать</button>
        </div>
        <div className='container'>
          <hr className="line"></hr>
          <img className='image' src={image0}></img>
        </div>
      </div>
    </div>

        <nav className="home-menu">
          <ul >
            <li>
              <Link to="/gallery" >Галерея</Link>
            </li>
            <li>
              <Link to="/price">Цены</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
            <li>
              <Link to="/aboutus">О нас</Link>
            </li>
          </ul>
        </nav>
        </div>
    </>
  )
}
export default HomePage