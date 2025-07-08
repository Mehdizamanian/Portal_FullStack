import React, { useMemo, useState } from 'react'

const LearnMemo = () => {

    const[counter , setCounter]=useState(0)




    const[num , setNumber]=useState(10000)

    const sumof = useMemo(()=>{
        let sum=0
        for (let i = 0; i < num; i++) {
            sum+=i
        }
        return sum;
    },[num])







    const counterHandler=()=>{
        setCounter(counter+1)
        console.log(sumof)
        if (counter===3) {
            setNumber(44444)
        }
    }



    


        

  return (
    <>
        <h1 style={{color:"white"}}>{counter}</h1>
        <button onClick={counterHandler}> increase </button>
        <h3 style={{color:"white"}} >useMemo Cashing func when counter is greater than 3  = {sumof}</h3>
        
    </>
  )
}

export default LearnMemo