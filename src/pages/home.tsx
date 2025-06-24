import { Link } from 'react-router-dom';

const HomePage = ( ) => {
  return (
    <>
    <div> Home </div>
    <nav>
      <ul>
        <li>
          <Link to="/gallery">Галерея</Link>
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
    </>
  )
}
export default HomePage