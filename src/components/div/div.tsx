import classes from './div.module.scss';
import MyBtn from '../button/button';
import MyRandomIcon from '../random-icon/random-icon';
import { useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import randomImage from '../../utils/randomise-icon';

function MyDiv() {
    let [type, setType] = useState(['fas', randomImage(fas)]);

    function setting(params: string) {
        setType([params, randomImage(params === 'fas' ? fas : params === 'far' ? far : fab)]);
    }

    return (
        <div className={classes.div}>
            <MyRandomIcon type={type} />
            <MyBtn click={setting} />
        </div>
    );
}

export default MyDiv;
