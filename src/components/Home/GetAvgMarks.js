import firebase from "../firebase";
async function GetAvgMarks() {

  var avgMarks = [];
  var sumcoi = 0;
  var summl = 0;
  var sumda = 0;
  var sumdaa = 0;
  var sumcd = 0;
  var sumdbms = 0;

  const marks = await firebase.getmarks("single");
  if (marks) {
    var coi = marks.get("coi")
    var ml = marks.get("ml")
    var da = marks.get("da")
    var daa = marks.get("daa")
    var cd = marks.get("cd")
    var dbms = marks.get("dbms")

    console.log(coi);
    if (coi) {
      for (let i in coi) {
        sumcoi = sumcoi + coi[i];
      }
      avgMarks.push((sumcoi / coi.length) * 10);
    }else{
        avgMarks.push(0);
    }
    
    if (ml) {
        for (let i in ml) {
          summl = summl + ml[i];
        }
        avgMarks.push((summl / ml.length) * 10);
      }else{
          avgMarks.push(0)
      }

      if (da) {
        for (let i in da) {
          sumda = sumda + da[i];
        }
        avgMarks.push((sumda / da.length) * 10);
      }else{
          avgMarks.push(0)
      }

      if (daa) {
        for (let i in daa) {
          sumdaa = sumdaa + daa[i];
        }
        avgMarks.push((sumdaa / daa.length) * 10);
      }else{
          avgMarks.push(0)
      }

      if (cd) {
        for (let i in cd) {
          sumcd = sumcd + cd[i];
        }
        avgMarks.push((sumcd / cd.length) * 10);
      }else{
          avgMarks.push(0)
      }

      if (dbms) {
        for (let i in dbms) {
          sumdbms = sumdbms + dbms[i];
        }
        avgMarks.push((sumdbms / dbms.length) * 10);
      }else{
          avgMarks.push(0)
      }
  }else{
    avgMarks=[0,0,0,0,0,0]
  }
  return avgMarks;
}
export default GetAvgMarks;
