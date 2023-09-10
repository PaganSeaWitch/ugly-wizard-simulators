import React from 'react';
import PropTypes from 'prop-types';
import Jouster from '../Jouster/Jouster';
import Button from '@mui/material/Button';
import { useEffect } from 'react';



const WizardJousting = () => {
  const [jouster1, setJouster1] = React.useState({health : 10, strength : 5, luck : 5, house : 'Gryffindor', name : 'Harry Potter'});
  const [jouster2, setJouster2] = React.useState({health : 10, strength : 5, luck : 5, house : 'Gryffindor', name : 'Harry Potter'});
  const [disableSettings, setDisableSettings] = React.useState(false)
  const [match, setMatch] = React.useState('')
  function setJouster(playerOne, newStr, newLuck, newDex, newHouse, newName, newHealth = null){
    if(playerOne === true){
      setJouster1({health : newHealth == null ? jouster1.health : newHealth, strength : newStr, luck : newLuck, dexterity: newDex, house : newHouse, name : newName})
    }
    else{
      setJouster2({health : newHealth == null ? jouster2.health : newHealth, strength : newStr, luck : newLuck, dexterity: newDex, house : newHouse, name : newName})

    }
  }

  useEffect(() => {
    if(disableSettings == true){
      populateMatch()
    }
  }, [disableSettings])

  function populateMatch(){
    let matchVal = "Today we have a fine contest of strength!\n"
    matchVal += "Our first competitor is of " + jouster1.house + " house and their names is... " + jouster1.name.toUpperCase() + "!\n"
    matchVal += "Our second competitor is of " + jouster2.house + " house and their names is... " + jouster2.name.toUpperCase() + "!\n"
    matchVal += "\n"

    let playerOneHealth = jouster1.health
    let playerTwoHealth = jouster2.health
    while(playerOneHealth > 0 && playerTwoHealth > 0){
      const playerOneisLucky =  jouster1.luck > (Math.floor(Math.random() * 10) + 1); 
      const playerTwoisLucky = jouster2.luck > (Math.floor(Math.random() * 10) + 1);

      matchVal += "They ready their brooms and thier lances...\n"
      if(playerOneisLucky){
        matchVal += jouster1.name + " has a mad gleam in their eye.\n"
      }
      if(playerOneisLucky){
        matchVal += jouster2.name + " has a mad gleam in their eye.\n"
      }
      matchVal += "They begin to race towards eachother at a frighting pace!\n"

      const didPlayerOneHit = jouster1.dexterity > (Math.floor(Math.random() * 10) + 1) 
      const didPlayerTwoHit = jouster2.dexterity > (Math.floor(Math.random() * 10) + 1) 
      
      if(didPlayerOneHit){
        const hit = (Math.floor(Math.random() * jouster1.dexterity) + 1) + playerOneisLucky == true ? 2 : 0
        const defence = (Math.floor(Math.random() * jouster2.dexterity) + 1) + playerTwoisLucky == true ? 2 : 0
        const howHard = hit - defence
        if(howHard > 3){
          const harm = jouster1.strength * 2 - Math.floor(jouster2.strength /2)
          matchVal += jouster1.name + " delievers a crushing blow!\n"
          playerTwoHealth -= harm
        }
        else{
          const harm = Math.max(jouster1.strength - Math.floor(jouster2.strength /2), 1)
          matchVal += jouster1.name + " delievers a glancing blow!\n"
          playerTwoHealth -= harm
        }
      }
      if(didPlayerTwoHit){
        const hit = (Math.floor(Math.random() * jouster2.dexterity) + 1) + playerTwoisLucky == true ? 2 : 0
        const defence = (Math.floor(Math.random() * jouster1.dexterity) + 1) + playerOneisLucky == true ? 2 : 0
        const howHard = hit - defence
        if(howHard > 3){
          const harm = jouster2.strength * 2 - Math.floor(jouster1.strength /2)
          matchVal += jouster2.name + " delievers a crushing blow!\n"
          playerOneHealth -= harm
        }
        else{
          const harm = Math.max(jouster1.strength - Math.floor(jouster2.strength /2), 1)
          matchVal += jouster2.name + " delievers a glancing blow!\n"
          playerOneHealth -= harm
        }
      }
      if(playerOneHealth > 7){
        matchVal += jouster1.name + " still looks like hes raring to go!\n"
      }
      if(playerTwoHealth > 7){
        matchVal += jouster2.name + " still looks like hes raring to go!\n"
      }
      if(playerOneHealth <= 7 && playerOneHealth >= 5){
        matchVal += jouster1.name + " is looking haggard!\n"
      }
      if(playerTwoHealth <= 7 && playerTwoHealth >= 5){
        matchVal += jouster2.name + " is looking haggard!\n"
      }
      if(playerOneHealth <= 5 && playerOneHealth >= 3){
        matchVal += jouster1.name + " looks like they could fall over at any second!\n"
      }
      if(playerTwoHealth <= 5 && playerTwoHealth >= 3){
        matchVal += jouster2.name + " looks like they could fall over at any second!\n"
      }
      if(playerOneHealth < 3){
        matchVal += jouster1.name + " is hanging on by a thread!\n"
      }
      if(playerTwoHealth < 3){
        matchVal += jouster2.name + " is hanging on by a thread!\n"
      }
      matchVal += "The contestants make ready for another pass\n"
      matchVal += "\n"
    }
    matchVal += "The Match is over!\n"
    if(playerOneHealth <= 0){
      matchVal += jouster1.name + " has fallen from their broom!\n"
      matchVal += jouster2.name + " Has won the day!\n"
      matchVal += "A great victory for " + jouster2.name + " and " + jouster2.house +"!\n"
    }
    if(playerTwoHealth <= 0){
      matchVal += jouster2.name + " has fallen from their broom!\n"
      matchVal += jouster1.name + " Has won the day!\n"
      matchVal += "A great victory for " + jouster1.name + " and " + jouster1.house +"!\n"
    }
    setDisableSettings(false)
    setMatch(matchVal)
    
  }
  
  return (  
  <div>
    <header >Wizard Jousting</header>
    <Jouster setJoustPlayer={setJouster} playerOne={true} disabled={disableSettings} ></Jouster>
    <Jouster setJoustPlayer={setJouster} playerOne={false} disabled={disableSettings}></Jouster>
    <Button 
      variant="contained" 
      disabled={disableSettings} 
      onClick={() => {setDisableSettings(true)}}
    >
      Begin
    </Button>
    <div>
      <p style ={{'white-space': 'pre-line'}}>{match}</p>
    </div>
  </div>

  )
};

WizardJousting.propTypes = {};

WizardJousting.defaultProps = {};

export default WizardJousting;
