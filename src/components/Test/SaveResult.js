function SaveResult(props) {
	
       const userName = window.sessionStorage.getItem("userName");
       const status = window.sessionStorage.getItem("loggedin");
       const  d = new Date().toLocaleDateString()
       const   t = new Date().toLocaleTimeString()
       var n;
       var sub = '';
      const browser = navigator.appVersion
      const  getSub =()=>{
         for(let i in props[1]){
           sub = sub+props[1][i]+','
         }
      }
       props[2]=='single'?sub=props[1]:getSub()
      status?n=userName:n='Unknown'
     
        var obj = {
          date:d,
           time:t,
           name:n,
           marks:props[0],
           type:props[2],
           subject:sub,
           browser:browser,
          }
          
  // Search Sheet1
const SteinStore = require("stein-js-client");
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b"
);

store
  .append("Sheet24", [
    obj
  ])
  .then(res => {
    //alert(res)
  });
}

export default SaveResult;
