import { Block, Blocks } from 'components/layout';
import type { JSX } from 'react';

export default function NavBar(): JSX.Element {
    return (
        <Blocks
            direction = 'column'
            sx = { {
                border : '1px solid black',
                height : '100vh',
                width : '100px'
            } }
        >
            <Block><div>Hello I am navbar</div></Block>
        </Blocks>
    );
}