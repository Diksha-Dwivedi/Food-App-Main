import React from 'react'
import check from './image/check-mark.png'
import './eatinghealthy.css'

const EatingHealthy = () => {
  return (

<>
    <div className="container-fluid py-5  " >


 

<h1 className="Restaurents py-5"> START EATING HEALTHY TODAY</h1>
  <div className="row g-3  reviewfood py-5  ">

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center ">
 <br></br>
<h4 className="card-title">Healthy food</h4>
<h6 style={{color:'#f7115f'}}>Rs . 5000 / month</h6>
 <br></br>
 
<div  className="row"   >

    <div className="col-6  x">

<img className="card-img  picture " src={check}  ></img> 
<br></br>
<img className="card-img  picture " src={check}  ></img> 
<br></br>
<img className="card-img  picture " src={check}  ></img> 
<br></br>
    </div>

    <div className="col-6  y">

<h6> 30 meal every day</h6>
<h6> 20 discount available</h6>
<h6> 8 rated meal</h6>

    </div>

    
 
 
 
 <div class="card-footer">

<button type="button" className="btn  btn-lg  book  hungry"> I'm Hungry</button>  

 </div>

</div>



 
</div>
</div>

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card  text-center">
 <br></br>
  
<h4 className="card-title">Junk food</h4>
<h6 style={{color:'#f7115f'}}>Rs . 100 / month</h6>
 <br></br>
 
<div  className="row"   >

    <div className="col-6  x">

<img className="card-img  picture " src={check}  ></img> 
<br></br>
<img className="card-img  picture " src={check}  ></img> 
<br></br>
<img className="card-img  picture " src={check}  ></img> 
<br></br>
    </div>

    <div className="col-6  y">

<h6> 30 meal every day</h6>
<h6> 24 discount available</h6>
<h6> 6 rated meal</h6>

    </div>

    
 
 
 
 <div class="card-footer">

 <button type="button" className="btn  btn-lg  book hungry"> I'm Hungry</button>  

 </div>

</div>





</div>
</div>


<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card  text-center">
 <br></br>
  
<h4 className="card-title">Super food</h4>
<h6 style={{color:'#f7115f'}}>Rs . 1000 / month</h6>
 <br></br>
 
<div  className="row"   >

    <div className="col-6  x">

<img className="card-img  picture " src={check}  ></img> 
<br></br>
<img className="card-img  picture " src={check}  ></img> 
<br></br>
<img className="card-img  picture " src={check}  ></img> 
<br></br>
    </div>

    <div className="col-6  y">

<h6> 30 meal every day</h6>
<h6> 20 discount available</h6>
<h6> 5 rated meal</h6>

    </div>

    
 
 
 
 <div class="card-footer">

 <button type="button" className="btn  btn-lg  book hungry"> I'm hungury</button>  

 </div>

</div>





</div>
</div>











</div>


</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
</>





  )
}

export default EatingHealthy