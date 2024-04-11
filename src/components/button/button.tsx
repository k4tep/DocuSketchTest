import randomImage from '../../utils/randomise-icon';
import classes from './button.module.scss';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

function MyBtn(props: { click: (params: string) => void }) {
    return (
        <button className={classes.btn} onClick={() => props.click(randomImage({ fas, far, fab }))}>
            Icon update
        </button>
    );
}

export default MyBtn;
