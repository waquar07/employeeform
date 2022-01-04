import React, { useState } from "react";
const EmployeeForm = () => {
    const [userFeedback, setUserFeedback] = useState({
        Username: "",
        Department: "",
        Rating: "",
    });

    const [records, setRecords] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userFeedback, id: new Date().getTime().toString() };
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setUserFeedback({ Username: "", Department: "", Rating: "" })
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserFeedback({ ...userFeedback, [name]: value });
    }

    return (
        <>
            <form className='box' action='' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='Username'>Name: </label>
                    <input type='text' value={userFeedback.Username} onChange={handleInput} name='Username' id='Username' />
                </div><br></br>

                <div>
                    <label htmlFor='Department'>Department: </label>
                    <input type='text' value={userFeedback.Department} onChange={handleInput} name='Department' id='Department' />
                </div><br></br>

                <div>
                    <label htmlFor='Rating'>Rating: </label>
                    <input type='number' value={userFeedback.Rating} onChange={handleInput} name='Rating' id='Rating' />
                </div><br></br>

                <button className='btn' type='Submit'>Submit</button><br></br>
                <hr className='line'></hr>
            </form>

            <div className='ss'>
                {
                    records.map((curElem) => {
                        return (
                            <div className='Showdata'>
                                <span>Name:{curElem.Username} |</span>
                                <span>Department:{curElem.Department} |</span>
                                <span>Rating:{curElem.Rating} </span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default EmployeeForm