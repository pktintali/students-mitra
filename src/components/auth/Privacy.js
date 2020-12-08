import React from "react";
import { Helmet } from "react-helmet";
import TopBar from "../TopBar";
const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>StudentMitra Privacy and Policy</title>
        <meta
          name="description"
          content="StudentMitra Privacy and Policy Page"
        />
      </Helmet>
      <TopBar bool={true} settings={true} txt={"Privacy and Policy"} />
      <div
        style={{
          textAlign: "left",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: "-10px",
        }}
      >
        <h2>Introduction</h2>
        <p style={{ display: "inline-block", width: "100%" }}>
          This application has been developed and published by TDevelopers
          India. “TDevelopers” or “we” or “us” refers to TDevelopers India and
          the TDevelopers Corporate Family in our privacy policy. The
          TDevelopers corporate family means its owner, employees, consultants
          and and its subsidiaries
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          This privacy policy applies whenever you signup, login, use or
          interact with our application and services.
        </p>
        <ul>
          <li>What information we collect, how we collect, and why</li>
          <li>How we use that information and with whom we share it</li>
          <li>How can you access and update the information you provide</li>
          <li>How we protect your information</li>
        </ul>
        <hr></hr>
        <h3>1. INFORMATION WE COLLECT</h3>
        <h3>1.1 Information you provide to us</h3>

        <p style={{ display: "inline-block", width: "100%" }}>
          <b>Signup :</b>
          <br></br>
          To create your account you provide data including your name, email
          address, and a password.
        </p>

        <p style={{ display: "inline-block", width: "100%" }}>
          <b>Profile :</b>
          <br></br>
          You have choices about the information in your profile such as your
          name, education, address, country and state, contact number, profile
          picture and date of birth. Although, this information is not mandatory
          but user can update this information to seek better services.
        </p>
        <p>
          <b>Posting and Uploading :</b>
          <br></br>
          Verified users can post their queries and other useful information
          they wish to share and can upload files to support it. Users can
          comment on the posts.
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          <b>Test Results :</b>
          <br></br>
          The marks obtained from the tests you take are collected in our
          database.
        </p>
        <h3>1.2 How do we collect information?</h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          We collect information directly from you as well as automatically
          through your use of services.
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          <b>Information that you give us :</b>
          <br></br>
          Typicallly the information you give us includes your contact details,
          address, name, email address, education, your posts and comments.
        </p>

        <p style={{ display: "inline-block", width: "100%" }}>
          <b>Information collected automatically :</b>
          <br></br>
          Though we do do not use any information collected automatically
          through site and browser settings, we have the access to them. This
          information may include your browser type and version, your preferred
          language, location using IP address. We do not need these information
          for our application and are committed not to use them.
        </p>

        <p style={{ display: "inline-block", width: "100%" }}>
          <b>Links to Other Sites :</b>
          <br></br>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services
        </p>
        <hr></hr>
        <h3>2. USE OF YOUR INFORMATION</h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          We use your personal inform to:
        </p>
        <ul>
          <li>provide better and more accurate courses for you</li>
          <li>notify you about the updates and changes</li>
          <li>
            authenticate your login and keep your account working and secure
          </li>
          <li>provide technical support</li>
        </ul>
        <p>
          We neither use your information for purposes other than mentioned
          above, nor we share any of the information to any other third party
          application or service. All the information you provide is safely and
          securely stored in our Google’s FIREBASE database.
        </p>
        <hr></hr>
        <h3>3. Cookies Policy</h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          A cookie is a small piece of data that a website asks your browser to
          store on your computer or mobile device. The cookie allows the website
          to “remember” your actions or preferences over time. Most browsers
          support cookies, but users can set their browsers to decline them and
          can delete them whenever they like.
        </p>
        <p style={{ display: "inline-block", width: "100%" }}>
          If you use Studentmitra, both Studentmitra and third parties will use
          cookies to track and monitor some of your activities on and off
          Studentmitra, and store and access some data about you, your browsing
          history, and your usage of Studentmitra. This policy describes how
          both Studentmitra and other third parties use cookies both within and
          without Studentmitra and how you can exercise a better control over
          cookies. Please keep in mind that this may alter your experience with
          our platform, and may limit certain features (including being logged
          in as a user).
        </p>
        <p>These cookies help us:</p>
        <ul>
          <li>
            To Remember users’ custom preferences like themes and language and
            help create more useful products
          </li>
          <li>
            Collect information on our users’ preferences in order to create
            more useful products
          </li>
        </ul>
        <hr></hr>
        <h3>What if there are changes in privacy policy ?</h3>
        <p style={{ display: "inline-block", width: "100%" }}>
          We may update this Privacy Policy as necessary to reflect changes we
          make and to satisfy legal requirements. We will post a prominent
          notice of material changes on our website. We will provide you with
          other appropriate notice of important changes at least 30 days before
          the effective date.
        </p>
        <div className="w3-yellow w3-panel w3-center">
          <p style={{ fontFamily: "Georgia, serif" }}>
            CONTACT US If you have any questions, comments, or concerns
            regarding this Policy, please contact TDevelopers at:<br></br>
            <p style={{ fontSize: 18 }} className="w3-text-red">
              <a className="no-td" href="mailto:tdeveloperindia@gmail.com">
                tdeveloperindia@gmail.com
              </a>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
