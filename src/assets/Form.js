import React, { useState } from 'react'

function Form() {
    const [input, setInput] = useState('')
    //use a checkbox to print value in input 
    //tie state to onclick event of checkbox
    //create state for value in input 
    const [count, setCount] = useState(0)
    const [option, setOption] = useState('')

    function handleCheckBox() {
        setInput(input + 'a big fucking deal!')
        setInput('')
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCount((count) => count)
    }

    function handleOption(e) {
        e.preventDefault()
        setOption(option => option)
    }
    return (
        <div>
            <form>
                <input type='text' name='inputValue' onChange={(e) => setInput(e.target.value)} />
                <input type='number' name='number' onChange={(e) => setCount(e.target.value)} />
                <button type='submit' onClick={handleSubmit}>You have clicked {count} times!</button>

                <label>
                    CheckBox:  <input type='checkbox' name='myCheckbox' defaultChecked={false} onChange={handleCheckBox} />
                </label>
                <p>{input}</p>
                {/* <p>
                    Radio Buttons:
                    <label>
                        <input type='radio' name='myRadio' value='opt1' onChange={(e) => setInput(input + '   option motherfucking 1 bitch')} />
                        Option 1
                    </label>
                    <label>
                        <input type='radio' name='myRadio' value='opt2' onChange={(e) => setInput(input + '   option motherfucking 2 bitch')} />
                        Option 2
                    </label>
                    <label>
                        <input type='radio' name='myRadio' value='opt3' onChange={(e) => setInput(input + '   option motherfucking 3 bitch')} />
                        Option 3
                    </label>
                </p> */}
                <select name='selectList' id='slectList' onChange={handleOption}>
                    <option value='option 1' onChange={(e) => setOption(e.target.value)}>Option 1</option>
                    <option value='option 2' onChange={(e) => setOption(e.target.value)}>Option 2</option>
                    <option value='option 3' onChange={(e) => setOption(e.target.value)}>Option 3</option>


                </select>
                <p>{option + ' is the best option!'}</p>
            </form>
        </div>
    )
}

export default Form
