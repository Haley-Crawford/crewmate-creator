import { Link } from 'react-router-dom'
import crew from '../assets/crewmates.png'

export const Home = () => {
    return (
        <div className='grid'>
            <h1>Welcome to the Crewmate Creator!</h1>
            <br/>
            <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
            <img src={crew} width={500} alt='Image of crewmates'/>
            <br/>
            <Link to='/create' className='btn'>Create New Crewmate!</Link>
        </div>
    )
}