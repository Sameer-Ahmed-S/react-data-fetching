import React, { useEffect,useState } from "react";

function GetData() {
  // using state management, manage
    const [user,setUser]= useState(null);
    

  // error, loading and success states
    const [loading,setLoading]=useState(true);
    const [error,setError] = useState(null);

  async function fetchData() {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if(!response.ok)
      {
        throw new Error('Network response was not ok');
      }
      const data= await response.json();
      setUser(data);      
    }
    catch(err){
       setError('Error fetching data');
    }
    finallay
    {
      setLoading(false);
    }
  }

  // call the fetch data function when the  
  // page loads
  useEffect(()=>{    
    fetchData();
  },[]);

  if(loading)
  {
    return <h2>loading data</h2>
  }

  if(error)
  {
    return <h2>{error}</h2>
  }

  // Here is the basic data boilerplate
  return (
    <>
      {/* do not edit the code below this line */}
      <h2>Name: {user?.name}</h2>
      <h2>Email: {user?.email}</h2>
      <h2>Username: {user?.username}</h2>
    </>
  );
}

export default GetData;
