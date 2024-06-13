import './Mainpage.css';
import logo from './../../../img/logo.svg'
import tuman from './../../../img/tuman.svg'

function Mainpage() {
    return (
        <main>
            <header>
                <div class="bg"></div>
                <a href="#"><img src={logo} alt=""/></a>
                <nav>
                        <li><a href="">О продукте</a></li>
                        <li><a href="">Вкусы</a></li>
                        <li><a href="">Состав</a></li>
                        <li><a href="">Оптовый заказ</a></li>
                </nav>
            </header>
            <div id="main-txt">Зарядись бодростью <br/> в месте с GlitcH</div>
            <img src={tuman} alt="" class="decor" id="one"/>
        </main>
    )
}

export default Mainpage