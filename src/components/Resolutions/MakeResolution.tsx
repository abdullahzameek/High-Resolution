import React from "react";


export default function MakeResolution(){


    return(
    <div>
        <div className='reactangle'><p>Name Your Goal</p></div  >
        <div className='line'></div>
        <div className='setcontainer'><p className='set'>Set Goal Date: </p><input type="date" id="start" name="trip-start"value="2021-04-03"min="2021-04-01" max="2050-12-31"></input></div>
        <div className='setcontainer'><p className='set'>Set Start Date: </p><input type="date" id="start" name="trip-start"value="2021-04-03"min="2021-04-01" max="2050-12-31"></input></div>
        <div className='setcontainer'>Set Interval:
            <select name="interval" id="interval">
            <option value="Once a Day">Once a Day</option>
            <option value="Once a Week">Once a Week</option>
            <option value="Once a Month ">Once a Month</option>
            </select>
        </div>
        <div className='setcontainer'>Set Tags: <div className='autofill'></div></div>
        <div className='hashtags'>#randomhashtag</div>
        <div className='line'></div>
        <div className='reactangle2'><p>Start Resolution!</p></div>
    </div>
    );

};