import firebase from "../firebase";

async function SaveResult(props) {
  if (props.type === "single") {
      var a = [];
      var b = (await firebase.getmarks(props.sub)).get("marks");
      if (b === undefined) {
        a.push(props.mark);
      } else {
        b.push(props.mark);
        a = b;
      }
      const data = {
        marks: a,
      };
      firebase.updateMarks(data, props.sub);
  }
   else {
    //TODO Update Marks for Select Subject
  }
}

export default SaveResult;
