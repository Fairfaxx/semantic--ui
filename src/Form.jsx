import React from 'react'






const Form = () => {

    const [name, setName] = React.useState('')

    const getName = (e) => {
        e.preventDefault()

        if(!name.trim()){
            console.log('empty value')
            return
        }

        
        console.log(name)
        e.target.reset()
    }

    return (
        <div className='mb-5'>
            <form onSubmit={getName}>
                <input 
                type='text' 
                placeholder='Enter your name' 
                className="form-control mb-2 mx-5 w-25"
                onChange={(e) => setName(e.target.value)}    
                />
                <button className='btn btn-dark btn-md btn-block w-25 mx-5' type='submit'>Submit</button>
            </form>

            {/* <ul>
                name.map( (item) => (
                    <li >{item}</li>
                ))
            </ul> */}
        </div>
    )
}

export default Form;
