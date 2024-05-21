// import React from 'react';
// import './features.css';

// const Card = ({ PlanData }) => {
//   //console.log(PlanData);
//   return (
//     <>
//       <section className='main-card--container'>
//         {/* Removed curly braces here */}
//         {PlanData.map((currEle, indx, arr) => {
//           return (
//             <>
//               <div className="row g-3">
//                 <div className='col-xl-4 col-lg-4 col-sm-6 col-6 px-3'>
//                   <div className="container card" key={currEle.id} >
//                     <div className="card-title">name: {currEle.name}</div>
//                     <div className="card-body">
//                       <div> duration: {currEle.duration}</div>
//                       <div>price: {currEle.price}</div>
//                       {/* <div>{currEle.price}</div> */}
//                       <div>ratingsAverage: {currEle.ratingsAverage}</div>
//                       <div>discount: {currEle.discount}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// export default Card;





































// import React from 'react'
// import './features.css'
// import './card.css'

// const Card = ({PlanData}) => {
//     //console.log(PlanData);
//   return (
//     <>
//     {
        
//         PlanData.map((currEle ,indx ,arr)=>{

//             return(
//                 <>
// <section className='main-card--container'>
//                <div className="row g-3 plancard">


//                 <div className='col-xl-4 col-lg-4 col-sm-6 col-6 px-3 plancard'>

//                 <div className="container card"  key={currEle.id} >
//             <div className="card-title">name : {currEle.name}</div>
//             <div className="card-body">

//                 <div> duration : {currEle.duration}</div>
//                 <div>price : {currEle.price}</div>
//                 {/* <div>{currEle.price}</div> */}
//                 <div>ratingsAverage :{currEle.ratingsAverage}</div>
//                 <div>discount: {currEle.discount}</div>
//             </div>


//         </div>

//                 </div>
//                </div>
      


//                </section>
//                 </>
//             )
           
//         })
        

//     }
    
    
//     </>
//   )
// }

// export default Card;

import React from 'react'
// import './card.css'

import './features.css'

const Card = ({PlanData}) => {
    //console.log(PlanData);
  return (
    <>
        <div className="row g-3 container-fluid">
    {
        PlanData.map((currEle ,indx ,arr)=>{

            return (
                <>



                <div className='col-xl-4 col-lg-4 col-md-4 col  px-5'>

                <div className=" card text-center"  key={currEle.id} >
            <h4 className="card-title" style={{color:'#f7115f'}}>name : {currEle.name}</h4>
            <div className="card-body">

                <div> duration : {currEle.duration}</div>
                <div>price : {currEle.price}</div>
                {/* <div>{currEle.price}</div> */}
                <div>ratingsAverage :{currEle.ratingsAverage}</div>
                <div>discount: {currEle.discount}</div>
            </div>


        </div>

                </div>
               
      



                </>
            )

        })

    }
    
    </div>
    </>
  )
}

export default Card