import React from 'react';
import './Users.css';
import Api from './Api';


const users = [{ 
   
        id:1,
        name: 'Negro Lanza',
        hobby: 'Cocina',
        hincha: 'River'
    },

    {
        id: 2,
        name: 'Emi',
        hobby: 'Plantar Porro',
        hincha: 'Racing'
    },

    {
        id: 3,
        name: 'Aleli',
        hobby: 'Bitcoins',
        hincha: 'Boca'
    }
];
//  

  let friends = users.map(user => user.name)
  console.log(friends)

  


  const Users = (props) => {

      
          return (
              <div className="ui grid">
                <div className="ui link cards main-div">
                    <div className="card ">
                        <div className="image">
                        <img className="medium" src={props.img} />
                        </div>
                        <div className="content">
                            <div className="header">
                            <h2>{props.name}</h2>
                            </div>
                            <div className="meta">
                            <h3>Hobby: {props.hobby} </h3>
                            <h3>Quote: {<Api cleanQuote/>}</h3>
                        </div>
                        <div className="description">
                            <h3 className="hincha">Hincha de: {props.hincha}</h3>
                        </div>
                        </div>
                    <div className="extra content">
                        <span className="right floated">
                            <h3>Joined at the age of {props.jam}</h3>
                        </span>
                    </div>
                    </div> 
                </div>   
              </div>
              
              
          )
      
  }

export default Users;