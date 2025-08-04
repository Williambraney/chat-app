import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/ui/Button';
import type { JSX } from 'react';

export default function LightDarkMode(): JSX.Element {
    return (
        <Button>
            <FontAwesomeIcon
                icon = { faCircleHalfStroke } 
            />
        </Button>
    );
}