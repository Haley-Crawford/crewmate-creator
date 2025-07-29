import { Link } from 'react-router-dom'
import ventPNG from '../assets/vent.png'

export const Nav = () => {
    return (
        <div className='nav'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/create'>Create Crewmate</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/gallery'>Crewmate Gallery</Link>
                </li>
            </ul>
            <img src={ventPNG} alt='Image of crewmate venting.' width={200} className='nav-img'/>
        </div>
    )
}