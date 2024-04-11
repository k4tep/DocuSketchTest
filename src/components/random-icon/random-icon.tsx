import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

function MyRandomIcon(props: { type: string[] }) {
    library.add(fas, far, fab);

    return (
        <FontAwesomeIcon
            icon={[
                props.type[0] === 'fas' ? 'fas' : props.type[0] === 'far' ? 'far' : 'fab',
                props.type[0] === 'fas'
                    ? fas[props.type[1]].iconName
                    : props.type[0] === 'far'
                    ? far[props.type[1]].iconName
                    : fab[props.type[1]].iconName,
            ]}
            size="2xl"
        />
    );
}

export default MyRandomIcon;
