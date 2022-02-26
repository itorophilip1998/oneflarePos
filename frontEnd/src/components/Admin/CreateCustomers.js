import React  from 'react'
import '../../App.scss'; 
import { Country }  from 'country-state-city';

const CreatCustomer=()=> { 
  const items=Country.getAllCountries();
  console.log(items);
  return (  
    <div className='row m-0 '>    
    
        <div className="col-md-7 col-xl-5 mx-auto m-0 input-container "> 
        
        <h6  className=" mb-4 col-12"><span>
              <i className="mdi mdi-account-plus"></i> 
            </span> Create Customers </h6> 
          
        <div className="col-12  mt-3">
            <label htmlFor="" className='mb-0'>First Name:</label>
            <input type="text"
              className="form-control input shadow-sm" name="" id="" aria-describedby="helpId" placeholder=""/> 
          </div> 

        <div className="col-12 mt-2">
            <label htmlFor="" className='mb-0'>Last Name:</label>
            <input type="text"
              className="form-control input shadow-sm" name="" id="" aria-describedby="helpId" placeholder=""/> 
          </div>

        <div className="col-12 mt-2">
            <label htmlFor="" className='mb-0'>Company:</label>
            <input type="text"
              className="form-control input shadow-sm" name="" id="" aria-describedby="helpId" placeholder=""/> 
          </div>

        <div className="col-12 mt-2">
            <label htmlFor="" className='mb-0'>Phone:</label>
            <input type="text"
              className="form-control input shadow-sm" name="" id="" aria-describedby="helpId" placeholder=""/> 
          </div>

        <div className="col-12 mt-2">
            <label htmlFor="" className='mb-0'>Email:</label>
            <input type="text"
              className="form-control input shadow-sm" name="" id="" aria-describedby="helpId" placeholder=""/> 
          </div>

        <div className="col-12 mt-2">
            <label htmlFor="" className='mb-0'>Address:</label>
            <input type="text"
              className="form-control input shadow-sm" name="" id="" aria-describedby="helpId" placeholder=""/> 
          </div> 
        <div className="col-12 mt-2">
          <div className="row m-0 p-0">
           <div className="col-5 mr-auto mt-2 p-0">
              <label htmlFor="" className='mb-0'>Country:</label>
              <select className="form-control custom-select input shadow-sm" name="" id="">
               {/* {
                 items.map((item)=>{
                   return(<span key={item}>{item}</span>)
                 })
               } */}

              </select>  
          </div>

          <div className="col-5 ml-auto mt-2 p-0">
            <label htmlFor="" className='mb-0 '>Customer Group:</label> 
              <select className="form-control custom-select input shadow-sm" name="" id="">
                <option >1</option>
                <option>2</option>
                <option>3</option>
              </select>  
        </div> 
        </div>
        </div>

        <div className="col-12 mt-2">
            <label htmlFor="" className='mb-0'>Opening Balance:</label>
            <input type="text"
              className="form-control input shadow-sm" name="" id="" aria-describedby="helpId" placeholder=""/> 
          </div>
        <div className="col-12 mt-3"> 
            <button type="button" className="btn rounded-circle  border rounded-x shadow"><i className="mdi mdi-keyboard-backspace" aria-hidden="true"></i></button>
            <button type="button" className="btn btn-primary rounded-x shadow float-right">Create<i className="mdi mdi-plus" aria-hidden="true"></i></button>
          </div> 

        </div>
 
       
    </div>
  )
}

export default CreatCustomer;  