import firebase from "../firebase";
async function GetAvgMarks(props) {
  var activeSub = props.virtual
    ? await firebase.getField("activeSubject", props.email)
    : await firebase.getField("activeSubject");
  var individualData = [];
  var avgMarks = [];
  var fActiveSub = [];
  var min = 9999;
  var minSub = "";
  var isSubject = false;
  const allMarks = props.virtual
    ? await firebase.getUserMarks(props.email)
    : await firebase.getUserMarks();
  if (allMarks) {
    for (let i in activeSub) {
      // const submarks = props.virtual
      //   ? await (await firebase.getmarks(activeSub[i], props.email)).get("marks")
      //   : await (await firebase.getmarks(activeSub[i])).get("marks");
      const submarks = allMarks[activeSub[i]];
      var avg = 0;

      var len = [];
      var mark10 = [];
      var t = 0;
      mark10.push(0);
      if (submarks) {
        for (let j in submarks) {
          avg = avg + submarks[j];
          len.push(j);
          mark10.push(submarks[j] * 10);
          t = j;
        }
        len.push(parseInt(t) + 1);
        var num = (avg / submarks.length) * 10;
        avgMarks.push(Math.round((num + Number.EPSILON) * 100) / 100);
        if (mark10.length > 30) {
          mark10.splice(0, mark10.length - 31);
        }
        if (len.length > 30) {
          len.splice(0, len.length - 31);
        }
        individualData.push({ len: len, marks: mark10, sub: activeSub[i] });
        if (num < min) {
          min = num;
          minSub = activeSub[i];
        }
        fActiveSub.push(activeSub[i]);
      } else {
        // console.log(i)
        // activeSub.splice(i,1)
        // avgMarks.push(0);
      }
    }
  }
  if (activeSub && activeSub.length > 0) {
    isSubject = true;
  }
  // const fActiveSub=[]
  // const fAvgMarks=[]

  // for (let i in avgMarks) {
  //   if(avgMarks[i]!==0){

  //   }
  // }

  // avgMarks.push(0);
  // avgMarks.push(100);
  return {
    activeSubjects: fActiveSub,
    individualData: individualData,
    avgActiveSubMarks: avgMarks,
    weakSubject: minSub,
    isSubject: isSubject,
  };
}
export default GetAvgMarks;

// import firebase from "../firebase";
// async function GetAvgMarks(props) {
//   const activeSub = props.virtual
//     ? await firebase.getField("activeSubject", props.email)
//     : await firebase.getField("activeSubject");
//   var individualData = [];
//   var avgMarks = [];
//   var min = 9999;
//   var minSub = "";
//   for (let i in activeSub) {
//     const submarks = props.virtual
//       ? await (await firebase.getmarks(activeSub[i], props.email)).get("marks")
//       : await (await firebase.getmarks(activeSub[i])).get("marks");
//     var avg = 0;

//     var len = [];
//     var mark10 = [];
//     var t = 0;
//     mark10.push(0);
//     if (submarks) {
//       for (let j in submarks) {
//         avg = avg + submarks[j];
//         len.push(j);
//         mark10.push(submarks[j] * 10);
//         t = j;
//       }
//       len.push(parseInt(t) + 1);
//       var num = (avg / submarks.length) * 10;
//       avgMarks.push(Math.round((num + Number.EPSILON) * 100) / 100);
//       if (mark10.length > 30) {
//         mark10.splice(0, mark10.length - 31);
//       }
//       if (len.length > 30) {
//         len.splice(0, len.length - 31);
//       }
//       individualData.push({ len: len, marks: mark10, sub: activeSub[i] });
//       if (num < min) {
//         min = num;
//         minSub = activeSub[i];
//       }
//     } else {
//       avgMarks.push(0);
//     }
//   }
//   // avgMarks.push(0);
//   // avgMarks.push(100);
//   return {
//     activeSubjects: activeSub,
//     individualData: individualData,
//     avgActiveSubMarks: avgMarks,
//     weakSubject: minSub,
//   };
// }
// export default GetAvgMarks;
