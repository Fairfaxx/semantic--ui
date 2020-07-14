import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';

const App = () => {
    return (
        <div className="">  
            <h1 className="main-heading">La #20</h1>   
            <Users className="four wide column"
            name="Aleli"
            hobby="Bitcoins"
            hincha='Boca'
            jam= '18' 
            img = "https://i.pinimg.com/474x/6a/83/84/6a8384df968cbd9dadbb4472c674cca1.jpg" 

            />

            <Users className="four wide column"
            name="Negro Lanza"
            hobby="Cocinar Fumado"
            hincha='River'
            jam= '20'
            img = "https://i.pinimg.com/564x/41/ca/b9/41cab9716a1c593c51bf0ea73e715c91.jpg" 
            />
        </div>
    )
};

ReactDOM.render( <App />, document.getElementById('root'));