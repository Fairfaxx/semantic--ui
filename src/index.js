import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
// import Users from './Users';
// import NewCard from './NewCard';
import Api from './Api';
import { propTypes } from 'react-bootstrap/esm/Image';
// import Card from './Card';
// import Form from './Form.jsx';



const App = (props) => {
    return (

        <div >
            <h1 className="main-heading">La #20</h1>
            <div className="main-div d-flex m-3">

                <Api />
                <Api />
                <Api />
                <Api />
                <Api />
                <Api />
                <Api />
                <Api />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));