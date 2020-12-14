import React, { useState } from "react";
import firebase from "../firebase";
import AllNoti from "./admins/AllNoti";
import AllPosts from "./admins/AllPosts";
import MarksManager from "./admins/MarksManager";
import UsersTable from "./admins/UsersTable";

const AdminManager = () => {
  const [isPost, setIsPost] = useState(false);
  const [notify, setNotify] = useState(false);
  const [marks, setMarks] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [nf, setNf] = useState([]);
  async function UseAllUsers() {
    firebase.db
      .collection("usersData")
      .orderBy("userId", "asc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsers(newItems);
      });
  }

  async function UsePosts() {
    firebase.db
      .collection("posts")
      .orderBy("key", "desc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(newItems);
      });
  }

  async function UseNoti() {
    firebase.db
      .collection("notify")
      .orderBy("key", "desc")
      .onSnapshot((snapshot) => {
        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNf(newItems);
      });
  }

  const resetAll = () => {
    setAllUsers(false);
    setIsPost(false);
    setNotify(false);
    setMarks(false);
  };
  async function getUserData() {
    resetAll();
    await UseAllUsers();
    setAllUsers(!allUsers);
  }

  async function getAllPosts() {
    resetAll();
    await UsePosts();
    setIsPost(!isPost);
  }

  async function getAllNoti() {
    resetAll();
    await UseNoti();
    setNotify(!notify);
  }

  function allMarks() {
    resetAll();
    setMarks(!marks);
  }
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button
        onClick={getUserData}
        className="w3-button w3-margin w3-round w3-green"
      >
        Manage Users
      </button>
      <button
        onClick={getAllPosts}
        className="w3-button w3-margin w3-round w3-aqua"
      >
        Manage Posts
      </button>
      <button
        onClick={getAllNoti}
        className="w3-button w3-margin w3-round w3-pink"
      >
        Manage Notifications
      </button>
      <button
        onClick={allMarks}
        className="w3-button w3-margin w3-round w3-orange"
      >
        Manage Marks
      </button>

      {allUsers && <UsersTable users={users} />}
      {isPost && <AllPosts posts={posts} />}
      {notify && <AllNoti nf={nf} />}
      {marks && <MarksManager />}
    </div>
  );
};

export default AdminManager;
