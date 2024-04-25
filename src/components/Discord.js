import React from 'react'
import discord from '../assets/discord.png'
import '../styles/Discord.css'
import { Button } from 'react-bootstrap'

const Discord = () => {
  return (
    <div className="root text-center" id="discord">
      
      <div>
        <img src={discord} className="image" alt="Discord Logo" />
      </div>
      <div className="rightSide">
        <h1><span>Join</span> the <span>discord</span> and be</h1>
        <h1>part of the <span>community!</span></h1>
        <h1><span>Learn</span> from others like you!</h1>
        <Button className="discButton" href="https://discord.com/" target="_blank">Join Now</Button>
      </div>
    </div>
  )
}

export default Discord
