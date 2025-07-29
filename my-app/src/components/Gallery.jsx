import { Link } from 'react-router-dom'
import { Card } from './Card'

export const Gallery = ({ crewmates }) => {
    return (
        <div className='grid'>
            <h1>Your Crewmate Gallery!</h1>
            <br/>
            { crewmates.length > 0 ? 
                <div className='gallery'>
                    {crewmates.map(crewmate => (
                        <Card crewmate={crewmate} key={crewmate.id}/>
                    ))}
                </div>
            :
                <>
                    <h2>No Crewmates Yet 😞</h2>
                    <br/>
                    <Link to='/create' className='btn'>Create New Crewmate!</Link>
                </>
            }
        </div>
    )
}