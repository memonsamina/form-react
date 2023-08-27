
    import { useState } from "react"

    const  Form = () => {
  

   
        const [firstName, setFirstName] = useState("");
        const [nameMesg, setNameMesg] = useState("Enter Your first name here");
        const [showFirstNameError, setShowFirstNameError] = useState(false);
        const [surName, setSurName] = useState("");
        const [showSurNameError, setShowSurNameError] = useState(false);
      
        const [successMesg, setSuccessMesg] = useState("Enter Your sur name here");
      
        const [userEmial, setUserEmail] = useState("");
        const [showUserEmailError, setShowUserEmailError] = useState(false)
        const [emailMesg, setEmailMesg] = useState("Enter Your valid Email.");
      
        const [userPassword, setUserPassword] = useState("");
        const [showUserPasswordError, setShowUserPasswordError] = useState(false)
        const [passwordMesg, setPasswordMesg] = useState( "Enter Your valid password");
    
      
        const firstNameHandler = (e) => {
          setFirstName(e.target.value);
      
          if(firstName !== ""){
            setNameMesg("Looks Good!");
          }
        };
      
        const surNameHandler = (e) => {
          setSurName(e.target.value);
      
      
          if(surName !== ""){
            setSuccessMesg("Looks Good!");
          }
        };
      
        const userEmialHandler = (e) => {
          setUserEmail(e.target.value);
          if(userEmial !== ""){
            setEmailMesg("Looks Good!");
          }
        };
      
        const userPasswordHandler = (e) => {
          setUserPassword(e.target.value);
      
          if (userPassword !== ""){
         
            setPasswordMesg("Looks Good!");
          }
        };
      
      
        const userFormSubmitHandler = (e) => {
      
           e.preventDefault ()
          if (firstName === "") {
            setShowFirstNameError(true)
         
          }
      
          if (surName === "") {
              setShowSurNameError(true);
      
           
          }
      
          if (userEmial ==="") {
              setShowUserEmailError(true);
      
            
              
          }
          if (userPassword === "") {
              setShowUserPasswordError(true);
      
           
          }
        };
      
      
    

    return(
        <div>
        <h1 className="color fw-bold text-center">facebook</h1>
        <div>
        

          <div class="container">
            <h1 className='fw-bold text-center'>Create a new account</h1>
            <p className='text-center'> It's quick and easy.</p>
            <hr/>
            <form onSubmit={userFormSubmitHandler}>
              <input className="first" value={firstName}
               onChange={firstNameHandler} type="text"  placeholder="First Name"/>
 {showFirstNameError && (<p className={'${nameMesg === "Looks Good!" ? "text-success" : "text-danger"} fw-bold'}>
                          {nameMesg}
                        </p>
              )}


 <input className="second" value={surName}
  onChange={surNameHandler}  type="text"  placeholder="Surname" />
 {showSurNameError && (  <p className={'${successMesg === "Looks Good!" ? "text-success" : "text-danger"} fw-bold'}>
  {successMesg}</p> )}     


     <input className="third"  value={userEmial}
      onChange={userEmialHandler} type="email"  placeholder="Email" />
     {showUserEmailError && (<p className={'${emailMesg === "Looks Good!" "text-success" : "text-danger"} fw-bold'}> 
       {emailMesg}      </p>) }    

     <input className="third" value={userPassword}
      onChange={userPasswordHandler} type="password" placeholder="Password" />
 {showUserPasswordError && (<p className={'${passwordMesg === "Looks Good!" "text-success" : "text-danger"} fw-bold'}> 
{passwordMesg} </p> )}     
    

        <button  type="submit" className="btn btn-success d-flex justify-content-center fw-bold "> Sign-Up</button>
   </form>   </div>

            </div>
         </div>
        
         );

            }
export  default Form;
