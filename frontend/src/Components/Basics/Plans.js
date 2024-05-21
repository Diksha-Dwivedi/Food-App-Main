import React from 'react';
import './Plans.css';
import Navi from './Navi.js';
import star from './image/star.png'

const Plans = () => {
  return (

    <> 
    <Navi />
     

  <div className="container-fluid  " >


 

<h1 className="text-center " style={{color:'#f7115f'}}> CHOOSE YOUR PLAN</h1>
  <div className="row g-3  py-5  ">

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center ">
 <br></br>
<h4 className="card-title">STANDARD PLAN</h4>
<br></br>
<div   >
 <span  >
<img className="card-img  starpic " src={star}  ></img>&nbsp;
<img className="card-img  starpic " src={star}  ></img>&nbsp;
<img className="card-img  starpic " src={star}  ></img>&nbsp;
<img className="card-img  starpic " src={star}  ></img>&nbsp;
 

</span> 

</div>



<div className="card-body">
<p className="card-text"> The purpose of the Program is to protect the health of consumers, ensure fair practices in the food trade and coordinate international food standardization work. The CAC is an intergovernmental body, </p>
</div>

 

<button  type="button" className="btn  btn-lg  book  hungry " > Select</button>  
 
 <br></br>
 <br></br>
</div>

</div>

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center">
 <br></br>
<h4 className="card-title">PREMIUM PLAN</h4>
<br></br>
<div   >
 <span  >
<img className="card-img  starpic " src={star}  ></img>&nbsp;
<img className="card-img  starpic " src={star}  ></img>&nbsp;
 

</span> 

</div>
<div className="card-body ">
<p className="card-text"> A meal plan is a plan that is added to a room rate for providing a room and meals to guests at a hotel. It is very important for travelers to select a meal plan after checking the room rate. </p>
</div>
<button type="button" className="btn  btn-lg  book  hungry "> Select</button>  
<br></br>
 <br></br>
</div>
</div>


<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center">
 <br></br>
<h4 className="card-title">DELUXE PLAN</h4>
<br></br>
<div   >
 <span  >
<img className="card-img  starpic " src={star}  ></img>&nbsp;
<img className="card-img  starpic " src={star}  ></img>&nbsp;
<img className="card-img  starpic " src={star}  ></img>&nbsp;
 

</span> 

</div>
<div className="card-body">
<p className="card-text"> In deluxe menu you will have more variety of food options, like more seafood, more variety of vegetables and more exotic options than in standard menu.</p>
</div>
<button type="button" className="btn  btn-lg  book  hungry"> Select</button>  
<br></br>
 <br></br>
</div>
</div>













</div>
</div>

</>

  
  );
};

export default Plans;
