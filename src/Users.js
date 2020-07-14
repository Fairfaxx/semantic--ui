import React from 'react';
import './Users.css';


// const users = [{ 
//    friend1: {
//         id:1,
//         name: 'Negro Lanza',
//         hobby: 'Cocina',
//         hincha: 'River'
//     },

//     friend2: {
//         id: 2,
//         name: 'Emi',
//         hobby: 'Plantar Porro',
//         hincha: 'Racing'
//     },

//     friend3: {
//         id: 3,
//         name: 'Aleli',
//         hobby: 'Bitcoins',
//         hincha: 'Boca'
//     }
// }];


//   let nombres = users.map(user => ({nombre: users.name, hobbys: users.hobby }));
//   console.log(nombres)


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
                            <h3>Hobby: {props.hobby}</h3>
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