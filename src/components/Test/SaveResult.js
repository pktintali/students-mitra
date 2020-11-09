import firebase from "../firebase";

async function SaveResult(props) {
  if (props[2] === "single") {
    if (props[1] === "ml") {
      var a = [];
      var b = (await firebase.getmarks(props[2])).get("ml");
      if (b === undefined) {
        a.push(props[0]);
      } else {
        b.push(props[0]);
        a = b;
      }
      const data = {
        ml: a,
      };
      firebase.updateMarks(data, props[2]);
    }

    if (props[1] === "cd") {
      var a = [];
      var b = (await firebase.getmarks(props[2])).get("cd");
      if (b === undefined) {
        a.push(props[0]);
      } else {
        b.push(props[0]);
        a = b;
      }
      const data = {
        cd: a,
      };
      firebase.updateMarks(data, props[2]);
    }

    if (props[1] === "daa") {
      var a = [];
      var b = (await firebase.getmarks(props[2])).get("daa");
      if (b === undefined) {
        a.push(props[0]);
      } else {
        b.push(props[0]);
        a = b;
      }
      const data = {
        daa: a,
      };
      firebase.updateMarks(data, props[2]);
    }

    if (props[1] === "da") {
      var a = [];
      var b = (await firebase.getmarks(props[2])).get("da");
      if (b === undefined) {
        a.push(props[0]);
      } else {
        b.push(props[0]);
        a = b;
      }
      const data = {
        da: a,
      };
      firebase.updateMarks(data, props[2]);
    }

    if (props[1] === "dbms") {
      var a = [];
      var b = (await firebase.getmarks(props[2])).get("dbms");
      if (b === undefined) {
        a.push(props[0]);
      } else {
        b.push(props[0]);
        a = b;
      }
      const data = {
        dbms: a,
      };
      firebase.updateMarks(data, props[2]);
    }

    if (props[1] === "coi") {
      var a = [];
      var b = (await firebase.getmarks(props[2])).get("coi");
      if (b === undefined) {
        a.push(props[0]);
      } else {
        b.push(props[0]);
        a = b;
      }
      const data = {
        coi: a,
      };
      firebase.updateMarks(data, props[2]);
    }
  } else {
    //TODO Update Marks for Select Subject
  }
}

export default SaveResult;
