import React,{useState,useEffect} from 'react'
import ironman from '../../assest/iron.jpg'
import batman from '../../assest/batman.jpg'
import superman from '../../assest/superman.jpg'
import wonderwoman from '../../assest/wonder.jpg'
import spiderman from '../../assest/spider.jpg'
import TinderCard from 'react-tinder-card'
import axios from 'axios'
import './Card.css'

function Card() {

    const [people , setPeople] = useState([
        {
            name : "Iron Man",
            imageUrl : ironman
        },
        {
            name : "Spider man",
            imageUrl : spiderman
        },
        {
            name : "Batman",
        
            imageUrl : batman
        },
        {
            name : "Wonderwoman",
            imageUrl :wonderwoman
        },
        {
            name : "Superman",
            imageUrl : superman
        }
    ])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('tinder/card')
            setPeople([...people,req.data])
        }

        fetchData()
    }, [])

    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
      }
       
      const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="tinderCards">
            <div className="tinderCards_Container">
            {
                people.map((hero)=>{
                    return(
                        <TinderCard onSwipe={(dir)=>swiped(dir,hero.name)}
                        key ={hero.name}
                        onCardLeftScreen={() => outOfFrame(hero.name)} 
                    preventSwipe={['up', 'down']}
                    className="swipe"
                    >
                        <div style={{backgroundImage:`url(${hero.imageUrl})`}}
                        className="card">
                            <h3>{hero.name}</h3> 

                        </div>
                        
                       </TinderCard>                 )
                })
            }
            </div>
        </div>
    )
}

export default Card
