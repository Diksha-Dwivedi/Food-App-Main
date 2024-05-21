import React from 'react'
import './features.css'

 import  date from  './image/date.png' ;
 import  fast from  './image/fast.png' ;
 import  carrot from  './image/carrot.png' ;

 
const Features = () => {
  return (

    <>
    <h1 className="Restaurents"> Awsome features</h1>

    <div className="container-fluid" >
    
    
    
    
      <div className="row g-3">
    
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 " > 


    <div className="card text-center">
     <br></br>
    <h4 className="card-title">365 DAYS/YEAR</h4>
    <br></br>
    <img className="card-img" src={date}  ></img>
  <div className="card-body">
    <p className="card-text">Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style.</p>
    
  </div>
   
</div>
</div>

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center">
 <br></br>
<h4 className="card-title">365 DAYS/YEAR</h4>
<br></br>
<img className="card-img" src={carrot}  ></img>
<div className="card-body">
<p className="card-text">Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style.</p>

</div>

</div>
</div>


<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center">
 <br></br>
<h4 className="card-title">365 DAYS/YEAR</h4>
<br></br>
<img className="card-img" src={fast}  ></img>
<div className="card-body">
<p className="card-text">Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style.</p>

</div>

</div>
</div>




 



 



    
    </div>
    </div>

    </>
  )
}

export default Features