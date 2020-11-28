// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const DataFetchYT = (question) => {
//   const [videos, setVideos] = useState([]);
//   const [loaded,setLoaded]  = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     // const r = Math.floor(Math.random() * 10);
//     let isMounted = true;
//     if (isMounted) {
//         // alert("fetching")
//         alert(question)
//       axios
//         .get(
//           `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${question}&type=video&key=AIzaSyCVuEATyDBvgACEtaJ2r7tjkt7GhhI162s`
//           //`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${question}&type=video&key=AIzaSyCVuEATyDBvgACEtaJ2r7tjkt7GhhI162s`
//         )
//         .then((res) => {
//           for(let i =0;i<10;i++){
//             videos.push({title:res.data.items[i].snippet.title,video:res.data.items[i].id.videoId});
//           }
//             setLoaded(true)
//             console.log(videos);
//         })
//         .catch((error) => {
//           setLoaded(true)
//           setError(error);
//           alert(error);
//           console.log(error);
//         });
//     }
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   return loaded?videos:false;
// };

// export default DataFetchYT;
