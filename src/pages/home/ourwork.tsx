import '../../assets/styles/home.scss';
import oak from '../../assets/images/home/oak.png';
import buk from '../../assets/images/home/buk.png';
import ash from '../../assets/images/home/ash.png';
import plus from '../../assets/images/home/plus.png';
import minus from '../../assets/images/home/minus.png';


const OurWork = () => {
  return (
    <>
    <div className='ourwork'>
    <h1 className='font'>Дерево с котрым мы работаем</h1>
    <div className='ourwood'>
      <div className='wood'>
        <img src={oak} alt="Дуб"></img>
        <span>Дуб</span>
        <div className='plusminus'>
          <img src={plus}/> <span> Долговечность</span> <br/>
          <img src={plus}/> <span> Красивая текстура</span> <br/>
          <img src={plus}/> <span> Влагоустойчивость</span> <br/>
          <img src={minus}/> <span> Стоимость</span>
        </div>
      </div>
      <div className='wood'>
        <img src={buk} alt="Бук"></img>
        <span>Бук</span>
        <div className='plusminus'>
          <img src={plus}/> <span> Долговечность</span> <br/>
          <img src={plus}/> <span> Трудно обрабатывать</span> <br/>

        </div>
      </div>
      <div className='wood'>
        <img src={ash} alt="Ясень"></img>
        <span>Ясень</span>
        <div className='plusminus'>
          <img src={plus}/> <span> Долговечность</span> <br/>
          <img src={plus}/> <span> Трудно обрабатывать</span> <br/>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default OurWork