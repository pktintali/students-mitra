import firebase from "../firebase";
async function GetAvgMarks() {
  const activeSub = await firebase.getField("activeSubject");
  var individualData = [];
  var avgMarks = [];
  for (let i in activeSub) {
    const submarks = await (await firebase.getmarks(activeSub[i])).get("marks");
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
      mark10.push(100);
      var num = (avg / submarks.length) * 10;
      avgMarks.push(Math.round((num + Number.EPSILON) * 100) / 100);
      individualData.push({ len: len, marks: mark10, sub: activeSub[i] });
    }
    else{
      avgMarks.push(0)
    }
    
  }
    avgMarks.push(0);
    avgMarks.push(100);
  return {
    activeSubjects: activeSub,
    individualData: individualData,
    avgActiveSubMarks: avgMarks,
  };
}
export default GetAvgMarks;
