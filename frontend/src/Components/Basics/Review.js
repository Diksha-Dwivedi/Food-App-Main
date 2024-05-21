import React from 'react'
import './review.css'
import star from './image/star.png'

const Review = () => {
  return (
     
<>

<div className="container-fluid py-5  " >


 

<h1 className="Restaurents py-5"> REVIEWS</h1>
  <div className="row g-3  reviewfood py-5  back">

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center">
 <br></br>
<h4 className="card-title">Udai Gupta</h4>
<br></br>
<div   >
<span  >
<img className="card-img  cardpic " src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>

</span>

</div>



<div className="card-body">
<p className="card-text"> very Good Food </p>
</div>
<h5 className="card-footer">Plane Name :Healthy food</h5>

</div>
</div>

<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center">
 <br></br>
<h4 className="card-title">krish jain</h4>
<br></br>
<div   >
<span  >
<img className="card-img  cardpic " src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>

</span>

</div>
<div className="card-body">
<p className="card-text"> Yummy Food </p>
</div>
<h5 className="card-footer">Plane Name :Fast food</h5>

</div>
</div>


<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-5" > 


<div className="card text-center">
 <br></br>
<h4 className="card-title">Manvi Yogi</h4>
<br></br>
<div   >
<span  >
<img className="card-img  cardpic " src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>&nbsp;
<img className="card-img  cardpic" src={star}  ></img>

</span>

</div>
<div className="card-body">
<p className="card-text"> Delicious Food</p>
</div>
<h5 className="card-footer">Plane Name :Super food</h5>

</div>
</div>













</div>
</div>

</>







  )
}

export default Review