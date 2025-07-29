import { Link } from 'react-router-dom'

export const Card = ({ crewmate }) => {
    return (
        <div className='card' style={{boxShadow:`0 0 5px 3px ${crewmate.color}`}}>
            <img src={`${crewmate.color}.webp`} height={150} alt='Image of crewmate'/>
            <h2>Name: {crewmate.name}</h2>
            <h2>Speed: {crewmate.speed} mph</h2>
            <h2>Color: {crewmate.color.toUpperCase()}</h2>
            <div className='card-choices'>
                <Link to={`/edit/${crewmate.id}`} className='edit-btn btn'>Edit</Link>
                <Link to={`/view/${crewmate.id}`} className='explore-btn btn'>View</Link>
            </div>
        </div>
    )
}