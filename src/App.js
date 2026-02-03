import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let [price,setprice]=useState(50);

    const age=30;//age is variable name
    const name="Ankkit Gupta";
    const arr=[1,2,3,4,5];//it has 5 items
    let i=0;

    console.log("my age is ",age);
   // age=41;//updating
     if(age>50)
     {
 console.log("my age is overage");
 alert("my age is overage");
     }
     else{
 console.log("my age is ",age);
 alert("my age is ",age);
     }

  //loop
  for(;i<10;i++)
      {
        console.log("Aziz");
      }   
  //map()
  const xyz=arr.map((item)=>console.log(item));    

  //changeprice function
  function changeprice()
  {
     console.log("before price::",price)
     // price=70;
      setprice(70);
      console.log("after price::",price)
  }
   
//html section
  return (
     <h3>
       {name} {age} "welcome" {console.log("testing") } 
      {/* display console */}
      {
         age>50?console.log("my age is overage"): console.log("my age is ",age)
    

      }
       {/* display browser */}

       {
         age>50?<h3>my age is overage</h3>:<h3> my age is {age}</h3> 
       }
       {/* display console */}
       {arr.map((item)=>console.log("Ankkit"))}
       {/* display browser */}
       <ul>
         
           {arr.map((item)=><li>{item}</li>)}
       </ul>
        <div>{price}</div>
        <button  onClick={changeprice} >change price</button>
      </h3>
  );
}

export default App;
