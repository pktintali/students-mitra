import React, { useState } from "react";
import firebase from "../../firebase";

const AllPosts = (props) => {
  const posts = props.posts;
  const [isFull, setIsfull] = useState(false);
  const [url, setUrl] = useState("");
  const [key, setKey] = useState();
  var i = 1;

  const fullImage = (
    <div style={{ display: "block", zIndex: 999999 }} className="w3-modal">
      <div
        style={{ maxWidth: "600px" }}
        className={`w3-modal-content w3-text-black w3-display-containr w3-padding w3-border w3-border-red w3-animate-zoom w3-padding w3-card-4`}
      >
        <span
          onClick={() => {
            setIsfull(false);
            setUrl("");
            setKey("");
          }}
          className="w3-button w3-border w3-text-red w3-display-topright"
        >
          X
        </span>
        {url ? (
          <img src={url} width="60%" />
        ) : (
          <span>
            <h2>Really Delete</h2>
            <h3>Key = {key}</h3>
            <strong>It Can't Be Undo</strong>
            <br></br>
            <br></br>
          </span>
        )}
        {key && (
          <button
            onClick={() => {
              firebase.deletePost(key);
              setKey("");
              setIsfull(false);
            }}
            className="w3-round w3-red w3-button"
          >
            Yes Delete
          </button>
        )}
      </div>
    </div>
  );

  const deletePost = (key) => {
    setKey(key);
    setIsfull(true);
  };

  return (
    <>
      {isFull && fullImage}
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
            <th>Key</th>
            <th>Date</th>
            <th>Time</th>
            <th>Author Name</th>
            <th>Author Id</th>
            <th>Text</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <tr
                  key={post.key}
                  className={`${
                    i % 2 === 0 ? "w3-aqua" : "w3-white"
                  } w3-hover-blue`}
                >
                  <td>{i++}</td>
                  <td>{post.key}</td>
                  <td>{post.date}</td>
                  <td>{post.time}</td>
                  <td>{post.author}</td>
                  <td>{post.authorId}</td>
                  <td>{post.text && post.text.substring(0, 50)}</td>
                  <td>
                    {post.image && (
                      <span
                        onClick={() => {
                          setUrl(post.image);
                          setIsfull(!isFull);
                        }}
                        className="w3-btn"
                      >
                        View Image
                      </span>
                    )}
                  </td>
                  <td>
                    <span
                      onClick={() => {
                        deletePost(post.key);
                      }}
                      className="w3-button w3-circle"
                    >
                      🗑️
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default AllPosts;
