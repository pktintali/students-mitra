//import React,{useState} from 'react';
import firebase from '../../../firebase';

async function AddRoom(id,userName,type,user){

const citiesRef = firebase.firestore().collection('games');
const snapshot = await citiesRef.where('roomid', '==', id).get();
const gameRef = firebase.firestore().collection('games').doc(id)

if(type==='marks'){
snapshot.forEach(doc => {
if(doc.data().p1===user){
gameRef.set({
   p1m: userName}, { merge: true });
}
else if(doc.data().p2===user){
gameRef.set({
   p2m: userName}, { merge: true });
}
else if(doc.data().p3===user){
gameRef.set({
   p3m: userName}, { merge: true });
}
else if(doc.data().p4===user){
gameRef.set({
   p4: userName}, { merge: true });
}
else{alert('Something is Wrong')}
})

}



if(type==='create'){

const res = gameRef.set({
  host: userName,roomid: id}, { merge: true });
//firebase
// .firestore()
// .collection('games')
 //.add({
//      roomid:id,
  //    host:userName
      
//  })
  
  }  
  
if(type==='addSub'){
   gameRef.set({
   subject: userName}, { merge: true });
}  
  
if(type==='p'){
snapshot.forEach(doc => {
	if(doc.data().p1===undefined){
gameRef.set({
   p1: userName}, { merge: true });
}
else if(doc.data().p2===undefined){
gameRef.set({
   p2: userName}, { merge: true });
}
else if(doc.data().p3===undefined){
gameRef.set({
   p3: userName}, { merge: true });
}
else if(doc.data().p4===undefined){
gameRef.set({
   p4: userName}, { merge: true });
}
else{alert('Something is Wrong')}
})
}

  if(type==='marks'){
       
   }
   
   
}

export default AddRoom;