
import firebase from "../firebase";

async function SaveResult(props) {

  const index = await firebase.getField('i')
  const tempi = await firebase.getField('tempi')
   if(index==10){
     await firebase.addField({i:0,tempi:tempi+1})
     tempi=tempi+1;
   }else{
     await firebase.addField({i:index+1})
   }
  
 // firebase.updateMarks({ml:})

  // const d = new Date().toLocaleDateString();
  // const t = new Date().toLocaleTimeString();
  // var n;
  // var sub = "";
  // const browser = navigator.appVersion;


  if(props[2]==='single'){
    //firebase.updateMarks({props[1]:props[0]})
    if(props[1]==='ml'){
     const data ={
       ml:props[0]
      }
      firebase.updateMarks(data,`${tempi}`)
    }
    if(props[1]==='cd'){
     const data ={
        cd:props[0]
       }
       firebase.updateMarks(data,`${tempi}`)
    }
    if(props[1]==='coi'){
      const data ={
        coi:props[0]
       }
       firebase.updateMarks(data,`${tempi}`)
    }
    if(props[1]==='da'){
      const data ={
        da:props[0]
       }
       firebase.updateMarks(data,`${tempi}`)
    }
    if(props[1]==='daa'){
     const  data ={
        daa:props[0]
       }
       firebase.updateMarks(data,`${tempi}`)
    }
    if(props[1]==='dbms'){
     const data ={
        dbms:props[0]
       }
       firebase.updateMarks(data,`${tempi}`)
    }
    
  }else{
    //TODO Update Marks for Select Subject
// for(let i in props[1]){
  
//   if(props[1][i]==='ml'){
//     firebase.updateMarks({ml:props[0]},index)
//   }
//   if(props[1][i]==='cd'){
//     firebase.updateMarks({cd:props[0]},index)
//   }
//   if(props[1][i]==='coi'){
//     firebase.updateMarks({coi:props[0]},index)
//   }
//   if(props[1][i]==='da'){
//     firebase.updateMarks({da:props[0]},index)
//   }
//   if(props[1][i]==='daa'){
//     firebase.updateMarks({daa:props[0]},index)
//   }
//   if(props[1][i]==='dbms'){
//     firebase.updateMarks({dbms:props[0]},index)
//   }
// }
  }
}

export default SaveResult;
