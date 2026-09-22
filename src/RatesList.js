import {useState,useEffect} from "react";

 
function RatesList(props)
{
	const [ratesList,setRates] = useState([]);
	const [ratesDetail,setRateDetail] = useState({"slno":"","machining_type":"","export_rate":"","hirata_spares_mfg_rate":"","domestic_rate":"","added_by":"","deleted":"","datecreated":""});
	const [initialState,setInitialState] = useState({"list":true,"edit":false,"successeditresp":false,"erroreditresp":false});
	// </React.StrictMode> disabled as useEffect call twice
	// useEffect hook is used to connect to external resources or non-react code
	//By using the useEffect hook with an empty dependency array, the function passed to useEffect will only run once when the component mounts, simulating the behavior of a page load event.
	function getRates()
	{
		 fetch("http://localhost/ReactJS/ajax_getrates.php",{"method":"POST","headers":{"Content-Type":"application/x-www-form-urlencoded"},"body":JSON.stringify({"rates_table":"tbl_rates"})})
		.then((resp)=>{   return resp.json();})
		.then((rates) => { setRates(rates.rateslist);  });
			
	}
	
	useEffect(()=>{
	  	getRates();
	 	/*fetch("http://localhost/ReactJS/ajax_getrates.php",{"method":"POST","headers":{"Content-Type":"application/x-www-form-urlencoded"},"body":JSON.stringify({"rates_table":"tbl_rates"})})
		.then((resp)=>{   return resp.json();})
		.then((rates) => { setRates(rates.rateslist);  });
	 */
	
			   },[]); // Passing an empty array as the second argument ensures the effect runs only once, on mount 

	function getRateById(rate_id)
	{
		 fetch("http://localhost/ReactJS/ajax_getratesbyid.php",{"method":"POST","headers":{"Content-Type":"application/x-www-form-urlencoded"},"body":JSON.stringify({"rate_id":rate_id,"rates_table":"tbl_rates"})})
		.then((resp)=>{   return resp.json();})
		.then((rates) => { 
			   setRateDetail(rates.rateslist[0]);  
			   // both objects should be in spread syntex when updating multiple properties
			   setInitialState({...initialState,...{"edit":true,"successeditresp":false}});
			   });
	}
	
	function handleChange(event)
	{
		const {name,value} = event.target;
		setRateDetail({...ratesDetail,[name]:value});
		//setRateDetail((prevState) => ({ ...prevState, [name]: value }));
	}
	
	function handleSubmit(event)
	{
		event.preventDefault();
		console.log(ratesDetail);
		fetch("http://localhost/ReactJS/ajax_updaterates.php",{"method":"POST","body":JSON.stringify(ratesDetail),"headers":{"Content-Type":"application/x-www-form-urlencoded"}})
		.then((resp)=>{   return resp.json();})
		.then((rates) => { 
			   
			   setInitialState({...initialState,["successeditresp"]:true});
			   
			  getRates();
			});
	}
	
	
	return (
			<>
			
			<div className="row" style={{"display":(initialState.edit)?"block":"none"}}>
<div className="col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                           Update Rate
                        </div>
                        <div className="panel-body">
                            <form role="form" onSubmit={handleSubmit}>
                             <div className="row text-center" style={{color:"#f00"}}><small>* marked fields are mandatory</small></div>
                             <div className="row">
                                <div className="col-lg-6">
                                          <div className="form-group">
                                            <label>Machining Type<span>*</span></label>
                                              <input type="text" placeholder="Enter Machining Type" name="machining_type" value={ratesDetail.machining_type} maxLength="50" onChange={handleChange} className="form-control" tabIndex="7"/>
                                         </div>
									
                                </div>
                                <div className="col-lg-6">
                                         
                                          <div className="form-group'">
                                            <label>Export Rate <span>*</span></label>
                                              <input type="text" placeholder="Enter Rate" name="export_rate" value={ratesDetail.export_rate} maxLength="6" className="form-control" onChange={handleChange} tabIndex="7"/>
                                         </div>
								
                                </div>
							</div>                                
  

                             <div className="row">
                                <div className="col-lg-6">
                                         
                                         <div className="form-group">
                                            <label>Hirata Spares MFG.com Rate <span>*</span></label>
                                              <input type="text" placeholder="Enter Rate" name="hirata_spares_mfg_rate" value={ratesDetail.hirata_spares_mfg_rate} maxLength="6" className="form-control" onChange={handleChange} tabIndex="7"/>
                                          </div>
									
                                </div>
                                <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Domestic Rate<span>*</span></label>
                                              <input type="text" placeholder="Enter Rate" name="domestic_rate" value={ratesDetail.domestic_rate} maxLength="6" className="form-control" onChange={handleChange} tabIndex="7"/>
                                        </div>
								
                                </div>
							</div>                                
  

 

<div className="row col-md-offset-4 col-md-6 col-lg-offset-4 col-lg-6">
                              <div className="form-group"> 

                                         <button type="submit" className="btn btn-success">Update</button>
 										<button type="button" className="btn btn-danger" onClick={(e) => {setInitialState({...initialState,["edit"]:false});}}>Back</button>

                                </div>  
</div>
<br />
<br />

<div className="row">
                                         
                            <div className="alert alert-success text-center" style={{"display":(initialState.successeditresp)?"block":"none"}}>Rates Updated Successfully</div>
                            <div className="alert alert-danger text-center" style={{"display":(initialState.erroreditresp)?"block":"none"}}></div>
</div>                            
                           </form>

                         </div>
 
                    </div>
                </div>
                 
            </div>
			
			
			
  			<table className="table table-striped table-bordered table-hover">
                                    <thead>
                                      <tr><th colSpan='6' align='center'><h3 style={{'textAlign':'center'}}>{props.title}</h3></th></tr>
                                        <tr>
                                            <th>Slno</th>
                                             <th>Machining Type</th>
                                             <th>Export Rate</th>
                                            <th>Hirata Spares MFG.com Rate</th>
                                             <th>Domestic Rate</th>
                                             <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody> 
									{ratesList.map((rate,cpos) => {return (<tr key={cpos}>
                                            <td>{cpos+1}</td>
                                            <td>{rate.machining_type}</td>
                                            <td><i className="fa fa-inr"></i> {rate.export_rate}</td>
                                            <td><i className="fa fa-inr"></i> {rate.hirata_spares_mfg_rate}</td>
                                            <td><i className="fa fa-inr"></i> {rate.domestic_rate}</td>
                                            <td><a href="#" onClick={()=>{ getRateById(rate.slno);}}>Edit</a></td>
                                         </tr>)
                                    })};
									
                                    </tbody>
                                </table>
								
										 
			 
 			</>
			);
	
}

export default RatesList;