import { supabase } from '../client'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home } from './Home'
import { Create } from './Create'
import { Edit } from './Edit'
import { View } from './View'
import { Gallery } from './Gallery'

export const Main = () => {

    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from('crewmates')
                .select()
                .order('created_at', { ascending: false })

            setCrewmates(data)
        }
        fetchData()
    }, [])

    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit/:id' element={<Edit crewmates={crewmates} />} />
                <Route path='/view/:id' element={<View crewmates={crewmates} />} />
                <Route path='/gallery' element={<Gallery crewmates={crewmates} />} />
            </Routes>
        </div>
    )
}