import React from 'react'

function Keypad (){
    function handleChange(e) {
        console.log('Entering password...')
    }
    return (
        <div>
            <input
                type="password"
                name="search"
                onChange={handleChange}
                placeholder="Enter search term..."
                />
        </div>
    )
}

export default Keypad;