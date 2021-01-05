import React, { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import LoadingScreen from "../../LoadingScreen";
toast.configure();
const HostedMarks = (props) => {
  const [result, setResult] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    firebase.getHostedTestResult(props.sub).then(setResult);
  }, []);

  var i = 1;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const customLoader = (
    <div>
      <h3>Exporting...</h3>
      <center>
        <BarLoader height="8" width="150" color="green" />
      </center>
      <div className="c-box-min"></div>
    </div>
  );
  async function connectSheet() {
    setLoader(true);
    const { GoogleSpreadsheet } = require("google-spreadsheet");
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(
      "11J8SGQIB0xKsYyZnbEURaOxIsV6NZBfLmqMkp8-eVE8"
    );

    // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth({
      client_email: "projectsheet@studentsmitra.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+qZ5WL/Nbxs9x\nGJqK1ByQ5K66ksNeplw7LUgacsxE1DNG1RzCGynPJuq0wnUGC3LXM8dBBQCKrZcq\naw9iCLYvQyzC4A53po0Cu3/c0gP918ZRWqU50Ftv35eIC0eB6Eta7sQLTmg2avXv\n8goEbYL73RnBrfpjHy+LixebnKttbJTWWuNxlzYoU4S//+0IppEG4+GzwXKxyTcB\nT4IFVBD0CxAMTJ2zxyF0JHjWV7i/yW0trDV/TGnbKlKyqj6nk1jQlXmzFG2/j3SF\nofJn6tcy6LAbKWiFrjQeeVR45T1PwMp/t+e7bRtn7CXQfPD/CcRxAtSsbF2B1cFc\n/cP8OlPbAgMBAAECggEADVX/5TdlZj35tIdsB9neRaQ5NIOfdrdcLCd2q6Lr9sSA\n8atmX41W1055jDstxEZ4ueS9Qyb+arTJpgXnBYxmcdfZAah6WpQjuNU0lFV8Qf0d\nugMFG44fVyvkhXeEgOmmm62nuMK7N1Mz8JyVZsniJ4vHiWyJ3vUHdlM8S34h331h\nm4im3UsSaQZSsOci/7zr1w3yTWxfsE7YU2RyMLJxjnshtLSn+/SeSVEBff3bjtUI\nil91XKE/1x0TLMUqGO3ICsl55z3C11iKclAC3sfqAp/ewMElAIk9Hpe3y+2JS4GD\nDKyMRDitQYUAVzJ7TsiipsX2tkI4ce4AWf80hdc8AQKBgQD82w4rKott5kGeDcKU\nbALVZTc2XAy263FtF+eidS/w+a4nEm9YMOhV/rBPUaCAI0snk/ddRYKiYTIWV2Bz\nRyu9yYhYdO8JQBUEcQtW9J5Y7jv6rvO6SYOrwa6D1BIbxWHsCn/LZCteoM7B6B8K\nnKGWmdX5+T+FdQclB1qdIO+MmwKBgQDBCJOfX4Kj10AoajUWGxSQ91rVmQIvrIMX\nFAeBdC64uN9bW8x6pJFgy7hcgZ/nCXjyFlsO80agI+pCD8PThmMVaUGWQb0ttObn\nNYMbS2Fygqu8+6EH8TTweDjPi/RY4cfw4Hd/7Yrs6AzBfsVpN75TZwBRTicbuj26\ntw7oBt2pwQKBgQCQhliT3a5yM4Df6TeFhDMea8riHDz8NJjRZS91kQvE7cFX/dZ8\njv/NX1TBEYPumb20MoPZ4Qgo7esmD+1GFrDuuolfHf8ex2z76+0yV4FGjWzk/Si8\nGpbTDlJEcWukSe6Nbvbadze+z6U9+gH8G8jUfrtqNMfU7S4XQRvO4etp7wKBgCgf\nVj/MJGVVulosKTidDFtNbq3zDcdG/kBvw1efBI8UrihZHllnl2gdMAbaUpg9GcyH\n5Qloe4eRr4FnsXZn+nRa2m0W4PF9JnlsYAHuWyToEDZJvyDde/l3o6dQGcvXsi1Z\nGr2WbEftu6kEZpgGJCNFx4Uez3Yt8eK7ZffIZY6BAoGBAIcc6/Sr7hiy4DrbcBmD\n8S9gp9bb9rcQYbPYvLdH49MESW0HHR6kJIBekHnoqr28OUTmjIpDiHvREUXNGyGQ\nHbnnym6NG239jCtula9xOp0Ve/b+7YC2vO/hjdEzdVGqD1jdCHhGJDVLo1KNU00b\n06JmpQvePaxfJ13cnSTY94+Z\n-----END PRIVATE KEY-----\n",
    });

    await doc.loadInfo();
    console.log(doc.title);
    const headerRow = ["UserID", "Name", "Marks"];
    var sheet = doc.sheetsByTitle[props.sub];
    if (sheet == undefined) {
      sheet = await doc.addSheet({ headerValues: headerRow });
      // const sheet = doc.sheetsByTitle["Sheet1"];
      // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
      await sheet.updateProperties({
        title: props.sub,
      });
      console.log(sheet.title);
      console.log(sheet.rowCount);

      const keys = Object.keys(result);
      for (var i = 0; i < keys.length; i++) {
        const dataRow = [keys[i], result[keys[i]][0], result[keys[i]][1]];
        // console.log(dataRow);
        await sheet.addRow(dataRow);
        sleep(1500);
      }
      toast.success("Exported Successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.error("Error: Subject Sheet Already Exist", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    // await sheet.setHeaderRow(row);
    // await sheet.addRow(row);
    // adding / removing sheets
    // const newSheet = await doc.addSheet({ title: "hot new sheet!" });
    // await newSheet.delete();
    setLoader(false);
  }

  return result ? (
    <>
      {loader && customLoader}
      <div className="w3-container">
        <button onClick={connectSheet} className="w3-button w3-round w3-green">
          Export Result
        </button>
      </div>

      <table
        style={{
          margin: 10,
          width: "98%",
        }}
        className="w3-table-all w3-card-4"
      >
        <thead>
          <tr className="w3-deep-orange">
            <th>S.N.</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {/* <h1>{result[user][0]}</h1>; */}
          {Object.keys(result).map((user) => {
            return (
              <tr
                key={user}
                className={`${
                  i % 2 === 0 ? "w3-aqua" : "w3-white"
                } w3-hover-blue`}
              >
                <td>{i++}</td>
                <td>{user}</td>
                <td>{result[user][0]}</td>
                <td>{result[user][1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  ) : (
    <LoadingScreen />
  );
};

export default HostedMarks;
