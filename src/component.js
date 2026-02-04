import { useEffect, useMemo, useState,memo, useRef } from "react";

function Compo1() {

     console.log("parent render.....");
     const [myarray, setmyarray] = useState([]);
     const [data, setdata] = useState("");
     const [searchvalue, updatesearchvalue] = useState("");

     const item = <h3>Ankkit and Aziz</h3>;
     //list of data
     //step 1
     const names = ["JMIK", "Ankit", "Aziz", "Brenda", "Ajay"];//it will not update ui/html
     //get data
     function fetchdata() {
          //step 2-->names variable is giving all its value to usestate variable (value)
          setmyarray(names);//it will update ui/html
     }
     //runs after tags are created--one time work---fisrt time when on render
     useEffect(() => {
         // console.log("component render");
          fetchdata();
     }, []);

    

     //exact filter
     //const filterdata=searchvalue?myarray.filter((item)=>item===searchvalue):myarray;
     //partial filter---computation---loop

     //const filterdata=useMemo(work,[variable1,variable2]); 
     //usememo returns/to give the value/result
     // const filterdata=useMemo( ()=>{return  work/resultvalue }   ,[variable]); 
     
         

     const filterdata = useMemo(() => {
          return searchvalue ? myarray.filter(
               (item) => { console.log("filtering...."); return item.includes(searchvalue); }) : (console.log("filtering...."), myarray);
     }, [searchvalue]);








     //giving to ?
     return (<div>

          <h3>List Of Names</h3>
          <input type="text" onChange={(e) => updatesearchvalue(e.target.value)} />
          <select onChange={(e) => updatesearchvalue(e.target.value)}>
               <option value="All">All</option>
               <option value="JMIK">JMIK</option>
               <option value="Aziz">Aziz</option>
               <option value="Brenda">Brenda</option>
               <option value="Ajay">Ajay</option>
          </select>
        
          <Namelist mylist={filterdata}/>

          <button >Click</button>

     </div>);
}


function Namelist({mylist})
{
console.log("child namelist render....");
  return (
    <ul>
      {mylist.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Compo1;//it just giving permission to be used anywhere outside
//export is used for other file not for same file