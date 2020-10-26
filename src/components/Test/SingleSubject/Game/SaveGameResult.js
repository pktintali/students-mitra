/*function SaveGameResult(props) {
	
      //const userName = window.sessionStorage.getItem("userName");
     //  const { GoogleSpreadsheet } = require('google-spreadsheet');
     //  const doc = new GoogleSpreadsheet('1nKZxQH1nAVPPhpSLH1tPlYcW31-ZRM9qi7KoGvpLroc');
    
      async function saveResult(){
      await doc.useServiceAccountAuth(require('./studentsmitracred.json'), 'projectsheet@studentsmitra.iam.gserviceaccount.com');
      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[1];
      const rows = await sheet.getRows();
      for(let i in rows){
           if(rows[i].name==userName){
                rows[i].marks = props[0]
                await rows[i].save()
           }
      }
  }
 
  saveResult();
}

export default SaveGameResult;*/