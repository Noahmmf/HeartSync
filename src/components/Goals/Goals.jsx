import { useState } from "react";
import GoalsItems from "./GoalsItems"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function Goals(){
    const dispatch = useDispatch();

    const goals = useSelector(store => store.goalsReducer);

    
    const [goal, setGoal]=useState({
        type: "daily",
        description: ''
    });

    const addNewGoal = event =>{
        event.preventDefault();
        dispatch({ type: "CREATE_GOAL", payload: goal});

    }

    const handleTypeChange = (e) => {
        setPlant({...goal, type: e.target.value});
    }

    const handleDescriptionChange = (e) => {
        setPlant({...goal, description: e.target.value});
    }


    if (goals.length === 0) {
        return(
        <p>Please enter a goal!</p>
        )
    }
    return (
        <>
        <form > 
            <label htmlFor="Type">Type:</label>
            <select onChange={handleTypeChange} name="Type" id="Type">
                <option value="daily">Daily</option>
                <option value="monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                <option value="5 Year">5 Year</option>
            </select>

            <label htmlFor="description">Description:</label>
            <input onChange={handleDescriptionChange} placeholder="Goal Description" type="text" />
            <button type="submit">Submit</button>
        </form>
            <ul>
            {goals.map((goal)=> <GoalsItems key={goal.id} goal={goal} />)}
            </ul>
        </>
    )
}