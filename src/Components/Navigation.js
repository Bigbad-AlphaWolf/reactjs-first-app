import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {animated, Transition} from 'react-spring';
import NavigationMenu from './NavigationMenu';

function Navigation() {
    const [displayMenu, setDisplayMenu] = useState(false);
    return (
        <nav>
            <span className='text-xl'>
                <FontAwesomeIcon icon={faBars} onClick={() => setDisplayMenu(!displayMenu)} />
            </span>

            <Transition items={displayMenu} from={{opacity: 0}} enter={{opacity: 1}} leave={{opacity: 0}}>
                {(styles, item) =>
                    item && (
                        <animated.div
                            style={styles}
                            className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-10'
                            onClick={() => setDisplayMenu(false)}
                        />
                    )}
            </Transition>
            <Transition
                items={displayMenu}
                from={{opacity: 0, transform: 'translateX(-100%)'}}
                enter={{opacity: 1, transform: 'translateX(0%)'}}
                leave={{opacity: 0, transform: 'translateX(-100%)'}}
            >
                {(styles, item) =>
                    item && (
                        <animated.div style={styles} className='fixed bg-white top-0 left-0 w-4/5 h-full z-10 shadow p-5'>
                            <NavigationMenu closeMenu={() => setDisplayMenu(false)} >

                            </NavigationMenu>
                        </animated.div>
                    )}
            </Transition>
        </nav>
    );
}

export default Navigation;
