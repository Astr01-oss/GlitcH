import './Secondpage.css';
import tuman from './../../../img/tuman.svg';
import banka from './../../../img/banka.svg';
import vr from './../../../img/VictoryRoyale.svg';
import fn from './../../../img/fnimg.svg';

function Secondpage(){
    return(
        <div class="second">
            <img src={tuman} alt="" id="two" class="decor"/>
            <img src={banka} alt=""class="decor1" id="banka"/>
            <img src={vr} alt=""class="decor1" id="victory"/>
            <img src={fn} alt=""class="decor1" id="fn"/>
            <div class="main-text" id="secondtxt">GlitH - это не просто напиток, это<br/> источник неиссякаемой энергии для тех, <br/>кто не останавливается ни на мгновение.<br/> Ощути в себе поток силы, который дает<br/> тебе возможность преодолевать любые<br/> препятствия и достигать своих целей. <br/>Свежий вкус и мощный заряд энергии<br/> GlitH поднимут твою активность на <br/>новый уровень, помогая добиться успеха <br/>во всем, что ты предпринимаешь.<br/> Погрузись в мир ярких впечатлений и <br/>бесконечных возможностей с GlitcH -<br/> напитком для тех, кто готов воплотить<br/> свои мечты в реальность.</div>
            <button>Узнать больше</button>
        </div>
    );
}

export default Secondpage