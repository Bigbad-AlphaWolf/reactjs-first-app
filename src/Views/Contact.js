import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBicycle, faHelicopter, faUserSecret } from '@fortawesome/free-solid-svg-icons';


function Contact(props) {
    return (
        <div>
             <h1 className='font-bold text-2xl mb-3'>My Contact Page</h1>
            <div>
                <ul>
                    <li className='p-4'>
                    <FontAwesomeIcon icon={faHelicopter} className="text-2xl mr-3" />
                        Prénom: Mohamed
                    </li>
                    <li className='p-4'>
                        <FontAwesomeIcon icon={faBicycle} className="text-2xl mr-3" />
                            Nom: Diop
                    </li>
                    <li className='p-4'>
                        <FontAwesomeIcon icon={faUserSecret} className="text-2xl mr-3" />
                            Fonction: Consultant Web/Mobile Developer
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;