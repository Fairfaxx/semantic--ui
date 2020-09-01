import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
// import Users from './Users';
// import NewCard from './NewCard';
import Api from './Api';
import { propTypes } from 'react-bootstrap/esm/Image';
import NewCardBtn from './NewCardBtn';
// import Card from './Card';
// import Form from './Form.jsx';



const App = (props) => {
    return (

        <div >
            <h1 className="main-heading">My Friends as a Simpson's character</h1>
            <div className="main-div d-flex m-3">

                <Api name='Negro Lanza as:' />
                <Api name='Emo as:' />
                <Api name='Fiore as:' />
                <Api name='Lale as:' />
                <Api name='Androide as:' />
                <Api name='El Pájaro as:' />
                <Api name='Mr Sarove as:' />
                <Api name='Juan "El Pollo" Areco as:' />
                <Api name='Chino as:' />
                <Api name='Santuli as:' />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));