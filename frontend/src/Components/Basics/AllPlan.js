import React, { useState } from 'react'
import Data from './Api'
import Card from './Card'
import './features.css'
import Navi from './Navi'

const AllPlan = () => {
    const [PlanData ,setPlanData]=useState(Data);
    //console.log(PlanData);
  return (
    <>
    <Navi/>
    <h1 className="text-center " style={{color:'#f7115f'}}> CHOOSE YOUR PLAN</h1><br></br> <br></br>
    <Card  PlanData={PlanData} />
    </>
  )
}


export default AllPlan;
