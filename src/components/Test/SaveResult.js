import firebase from "../firebase";

async function SaveResult(props) {
  if (props.type === "single") {
    var a = [];
    const temp = await firebase.getUserMarks();
    const b = temp ? temp[props.sub] : undefined;
    const key = props.sub;
    if (b === undefined) {
      a.push(props.mark);
    } else {
      b.push(props.mark);
      a = b;
    }
    const data = {
      marks: {
        [key]: a,
      },
    };
    await firebase.addField(data);
  } else {
    //TODO Update Marks for Select Subject
  }
}

export default SaveResult;
