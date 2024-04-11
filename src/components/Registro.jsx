
function Registro() {

   // const RegistrationForm = () => {
        
        //   const [formState, setFormState] = useState({
        
        //     name: "",
        
        //     password: "",
        
        //   });

        //   const [statusMessage, setStatusMessage] = useState("");

        //   const handleInputChange = (event) => {
            
        //         setFormState({
            
        //           ...formState,
            
        //           [event.target.name]: event.target.value,
            
        //         });
            
        //       };           
            
        //       const handleSubmit = async (event) => {
            
        //         event.preventDefault();            
            
        //         // Perform form validation here
            
        //         if (formState.password.length < 8) {
            
        //           setStatusMessage("Password must be at least 8 characters long.");
            
        //           return;
            
        //         }          
            
        //         // Send registration request to server here
            
        //         const response = await fetch("/api/register", {
            
        //           method: "POST",
            
        //           headers: {
            
        //             "Content-Type": "application/json",
            
        //           },
            
        //           body: JSON.stringify(formState),
            
        //         });
            
            
        //         if (response.ok) {
            
        //           setStatusMessage("Registration successful.");
            
        //         } else {
            
        //           setStatusMessage("Registration failed.");
            
        //         }
            
        //       };

    return <h1 className='title'>Registro</h1>;    


}

export default Registro;