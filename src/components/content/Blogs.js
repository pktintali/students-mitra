import React from "react";
import { Helmet } from "react-helmet";
import PostURLs from "./postURLs";
import PostCard from "./widgets/PostCard";

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>
          StudentMitra Blogs | Learn about python, flutter, dart, firebase, and
          modern technologies.
        </title>
      </Helmet>
      <header>
        <h2>Learn from Blogs on StudentMitra | Student Mitra Blogs</h2>
      </header>
      <hr></hr>
      <section className="w3-padding">
        <PostCard
          title="Easy way to implement dark theme in your flutter app."
          description="Now Days Dark themes are everywhere then why not in your flutter app
          🤔. Let's do it - We are going to implement dark theme in a simple
          flutter app using darkTheme property of MaterialApp"
          url={PostURLs.flutterDarkTheme}
        />

        <PostCard
          title="AKTU Admit Card 2021 2nd and 3rd Year Download"
          description="Aktu is about to release admit cards for 2nd year and 3rd year students
          Here is the full process to download the admit card.
           You can download it by entering your roll no university Roll No."
          url={PostURLs.aktuAdmitCard}
        />

        <div></div>
      </section>
      <footer></footer>
    </>
  );
};

export default Blogs;
