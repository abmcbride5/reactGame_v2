import BombBody from './BombBody';
import BombTop from './BombTop';

import '../css/BombBody.css';

export default function Bomb(props){
    return(
        <div className="Bomb">
            <BombBody />
            <BombTop />
        </div>
    )
}