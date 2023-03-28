import React, { useState } from 'react';
import styles from './Filteration.module.css';


function Filteration({filteration , Equal, setEqual}) {

  const handleChange = (e) => {
    // console.log(Equal);
    let value = e.target.value;
    if(value === "name"){
        setEqual(value);
    }else if(value === "age"){
        setEqual(value);
    }else if(value === "gender"){
        setEqual(value);
    }else if(value === "adresse"){
        setEqual(value);
    }else{
        setEqual(Equal);
    }
  }

  // خطوات الفلتر نفسه
  const[Filter, setFilter]= useState("");
  const filterHandler =(e) => {
    console.log(e.target.value)
    if(Equal==="name" || Equal===""){
        console.log("name")
            const name = e.target.value
            setFilter(name);
            filteration(name);
    }else if(Equal==="gender"){
        console.log("gender")
            const gender = e.target.value
            setFilter(gender);
            filteration(gender);
    }else if(Equal==="adresse"){
        console.log("adresse")
            const adresse = e.target.value
            setFilter(adresse);
            filteration(adresse);
    }else if(Equal==="age"){
        console.log("age")
            const age = e.target.value
            setFilter(age);
            filteration(age);
    }
    // const age = e.target.value
    // setFilter(age);
    // filteration(age);



    // the true answer for filteration by type
        // const type = e.target.value
        // setFilter(type);
        // filteration(type);
    // the true answer for filteration by type

    // the true answer for filteration by name
        // const name = e.target.value
        // setFilter(name);
        // filteration(name);
    // the true answer for filteration by name
  }
  // خطوات الفلتر نفسه


  return (
    <div className={styles.parent}>
      <p style={{display:"none"}}>{Equal}</p>
        {/* <form>
            <input type="text" placeholder="Search by Name" value={Filter} onChange={filterHandler} className={styles.inp}/>
        </form> */}

        {/* <div> */}
        <form>
            
            {/* لو عايزه أعمل input واحد ويمشي الدنيا من غير تنسيقات كتير */}
            <input type="text" placeholder={`Search by `+ Equal} value={Filter} onChange={filterHandler} className={styles.inp}/>

            {/* عادي ممكن أعملهم على 3 inputs لكن تزبيط ال css بتاعهم رغم شويه */}
            {/* <input type="text" placeholder='Search by name' className={`${Equal === "" || Equal === "name"? styles.show : styles.hide}`} value={Filter} onChange={filterHandler}/><br/> */}
            {/* <input type="text" placeholder='Search by age' className={`${Equal === "age" ? styles.show : styles.hide}`} value={Filter} onChange={filterHandler}/><br/> */}
            {/* <input type="text" placeholder='Search by type' className={`${Equal === "type" ? styles.show : styles.hide}`}  value={Filter} onChange={filterHandler}/> */}
        </form>
        {/* </div> */}

        <select onChange={handleChange} style={{fontWeight: "bold"}}>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="gender">gender</option>
            <option value="adresse">adresse</option>
        </select>

    </div>
  )
}

export default Filteration