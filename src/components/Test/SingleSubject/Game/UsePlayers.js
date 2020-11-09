import React,{useState,useEffect} from 'react';
import firebase from '../../../firebase';

function UsePlayers(id) {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
      const unsubscribe = firebase.db
        .collection("games")
        .doc(id)
        .collection("players")
        .onSnapshot((snapshot) => {
          const newItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setPlayers(newItems);
        });
  
      return () => unsubscribe();
    }, []);
  
    return players;
  }

  export default UsePlayers;