import React,{useState,useEffect} from 'react';
import axios from "axios";
const FetchSubjectList = () => {

    const [subList,setSubList] = useState()
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
      .get(
      )
      .then((res) => {
        setSubList(res.data.values);
        //setIsLoaded(true);
        console.log(subList);
      })
      .catch((error) => {
       // setIsLoaded(true);
        setError(error);
        alert(error)
        console.log(error);
      });

      // return ()=>{}
  }, []);

  return subList;

}

export default FetchSubjectList;
