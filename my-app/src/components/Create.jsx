import { useState } from 'react'
import { supabase } from '../client'
import crew from '../assets/crewmates.png'

const names = ['RedSus', 'Venti', 'Boop', 'Zorg', 'LilBean', 'Sussy', 'ImNotIt', 'Chonk', 'Snacc', 'NoCap', 'Glorb', 'Bloop', 'Skid', 'VentLord', 'Drip', 'Yote', 'Mogus', 'Blip', 'Saucy', 'Yeet',]
const colors = ['red', 'orange', 'yellow', 'lime', 'green', 'blue', 'cyan', 'purple', 'pink', 'white', 'brown', 'gray', 'black']

export const Create = () => {

    const [formData, setFormData] = useState({
        name: 'Among Us',
        speed: 5,
        color: 'red'
    })

    const handleRandomizer = () => {

        const randName = Math.floor(Math.random() * names.length)

        const randSpeed = (Math.random() * 24).toFixed(1)
        
        const randColor = Math.floor(Math.random() * colors.length)

        setFormData({
            name: names[randName],
            speed: randSpeed,
            color: colors[randColor]
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const createCrewmate = async (e) => {
        e.preventDefault()

        await supabase
            .from('crewmates')
            .insert({name: formData.name, speed: formData.speed, color: formData.color})
            .select()

        window.location = '/gallery'
    }

    return (
        <div className='grid'>
            <h1>Create a New Crewmate!</h1>
            <img src={crew} width={200} alt='Image of crewmates'/>

            <form className='create-form' onSubmit={createCrewmate}>
                <div className='form-content'>
                    <div className='wrapper'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' className='form-input' value={formData.name} onChange={handleChange} required/>
                    </div>
    
                    <div className='wrapper'>
                        <label htmlFor='speed'>Speed (mph):</label>
                        <input type='number' min='0' max='25' step={0.1} id='speed' name='speed' className='form-input' value={formData.speed} onChange={handleChange} required/>
                    </div>
    
                    <div className='wrapper'>
                        <label htmlFor='color'>Color:</label>
                        <select name='color' value={formData.color} id='colors' className='form-input' onChange={handleChange}>
                            {colors.map(color => (
                                <option key={color} value={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <br/>

                <div className='form-choices'>
                    <button type='button' onClick={handleRandomizer}>Randomize!</button>
                    <button type='submit'>Create!</button>
                </div>
            </form>
        </div>
    )
}