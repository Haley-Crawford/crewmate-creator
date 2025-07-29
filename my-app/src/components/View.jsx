import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const phrases = [
  "I'm not sus, you're just bad at math.",
  "Task complete. Still suspiciously awesome.",
  "Vent? I thought that was a jacuzzi.",
  "I’m just a crewmate with imposter energy.",
  "If I die first, it was Red. Always Red.",
  "Caught in 4K… doing my tasks like a boss.",
  "Who needs alibis when you have charisma?",
  "Electrical is my love language. Or my grave.",
  "I didn’t vent, I teleported with style.",
  "Download complete: sass.exe",
  "Vote me out? Bold of you to assume I care.",
  "I sus myself sometimes.",
  "My only crime is being too cute to kill.",
  "I’m built different. Probably an imposter.",
  "Swipe card? More like rage quit simulator.",
  "I have 3 tasks and 99 problems.",
  "I fake tasks better than I do friendships.",
  "Cyan’s lying. I can feel it in my pixels.",
  "No cap, I was in medbay vibing.",
  "Plot twist: I’m the imposter and the therapist.",
  "Scan me bro, I dare you.",
  "Lime green means go… straight to the emergency button.",
  "Sorry I’m late, I got lost in a vent.",
  "Emergency meetings are my cardio.",
  "Ghosted before it was cool.",
  "Sabotage is just spicy teamwork.",
  "I’m not hiding, I’m strategically avoiding conflict.",
  "Crewmate by day, imposter by night.",
  "Let me live, I have memes to post.",
  "I don’t trust anyone — not even myself.",
  "I was in cafeteria — emotionally.",
  "My defense? Vibes. Pure vibes.",
  "If the shoe fits, it's probably a vent cover.",
  "I bring sus to every discussion like seasoning.",
  "In space, no one can hear your excuses."
]

export const View = ({ crewmates }) => {

    const { id } = useParams()

    const [crewmate, setCrewmate] = useState(crewmates.filter(crewmate => id == crewmate.id)[0])

    const phraseIdx = Math.floor(Math.random() * phrases.length)

    return (
        crewmate && <div className='view'>
            <div className='view-flex'>
                <img src={`/${crewmate.color}.webp`} alt='Image of crewmate'/>
                <div className='view-content'>
                    <h1>Crewmate: {crewmate.name}</h1>
                    <br/>
                    <h1 className='view-stats'>Stats:</h1>
                    <br/>
                    <h1>Color:<span style={{color: crewmate.color}}> {crewmate.color}</span></h1>
                    <br/>
                    <h1>Speed: {crewmate.speed} mph</h1>
                </div>
            </div>
            <br/>
            <div className='view-flex column'>
                <h1>{phrases[phraseIdx]}</h1>
                <Link to={`/edit/${crewmate.id}`} className='edit-btn btn'>Edit!</Link>
            </div>
        </div>
    )
}