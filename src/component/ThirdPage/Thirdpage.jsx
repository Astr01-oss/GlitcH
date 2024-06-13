import './Thirdpage.css';
import banka from './../../../img/banka.svg';
import mango from './../../../img/mango.svg'

function Thirdpage(){
    return(
        <div class="third">
            <img src={banka} alt=""class="decor1" id="banka2"/>
            <div class="cont">
                <h1>Сделанно из <br/>натуральных <br/>ингридиентов</h1>
                <h2>И не только</h2>
            </div>
            <button id="butt2">Заказать <img src={mango} alt="" class="decor" id="mango"/></button>
        </div>
    );
}

export default Thirdpage;