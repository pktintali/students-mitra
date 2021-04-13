import React from "react";
import { Helmet } from "react-helmet";
import TopBar from "../TopBar";
const ML = () => {
  return (
    <>
      <Helmet>
        <title>Decision Tree Learning in Machine Learning</title>
        <meta
          name="description"
          content="Decision Tree learning ID3 Algorithm"
        />
      </Helmet>
      <TopBar txt="Decision Tree learning" />
      <div style={{ textAlign: "left", margin: 15 }}>
        <h1 id="decision-tree">Decision Tree</h1>
        <ul>
          <li>
            <p>
              Decision Tree is a Supervised learning technique that can be used
              for both classification and Regression problems, but mostly it is
              preferred for solving Classification problem.
            </p>
          </li>
          <li>
            <p>
              In a Decision tree, there are two nodes, which are the Decision
              Node and Leaf Node. Decision nodes are used to make any decision
              and have multiple branches, whereas Leaf nodes are the output of
              those decisions and do not contain any further branches.
            </p>
          </li>
          <li>
            <p>
              In order to build a tree, we use the CART algorithm, which stands
              for Classification and Regression Tree algorithm.
            </p>
          </li>
        </ul>
        <p>
          <strong>General structure of a decision tree :</strong>
        </p>
        <p>
          <img
            src="https://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1545934190/1_r5ikdb.png"
            width="95%"
            alt="Decision Tree Image"
          />
        </p>
        <p>
          {" "}
          <strong>Terminology related to Decision Trees :</strong>
        </p>
        <ul>
          <li>
            <strong>Root Node:</strong> It represents the entire population or
            sample and this further gets divided into two or more homogeneous
            sets.
          </li>
          <li>
            <strong>Splitting:</strong> It is a process of dividing a node into
            two or more sub-nodes.
          </li>
          <li>
            <strong>Decision Node:</strong> When a sub-node splits into further
            sub-nodes, then it is called the decision node.
          </li>
          <li>
            <strong>Leaf / Terminal Node:</strong> Nodes do not split is called
            Leaf or Terminal node.
          </li>
          <li>
            <em>Pruning:</em> When we remove sub-nodes of a decision node, this
            process is called pruning. You can say the opposite process of
            splitting.
          </li>
          <li>
            <strong>Branch / Sub-Tree:</strong> A subsection of the entire tree
            is called branch or sub-tree.
          </li>
          <li>
            <strong>Parent and Child Node:</strong> A node, which is divided
            into sub-nodes is called a parent node of sub-nodes whereas
            sub-nodes are the child of a parent node.
          </li>
        </ul>
        <hr></hr>
        <h2 id="id3-algorithm-">ID3 Algorithm :</h2>
        <ul>
          <li>
            The ID3 algorithm builds decision trees using a top-down greedy
            search approach through the space of possible branches with no
            backtracking. A greedy algorithm, as the name suggests, always makes
            the choice that seems to be the best at that moment.
          </li>
        </ul>
        <p>
          <strong>Steps in ID3 algorithm :</strong>
        </p>
        <ol>
          <li>It begins with the original set S as the root node.</li>
          <li>
            On each iteration of the algorithm, it iterates through the very
            unused attribute of the set S and calculates <code>Entropy(H)</code>{" "}
            and <code>Information gain(IG)</code> of this attribute.
          </li>
          <li>
            It then selects the attribute which has the{" "}
            <code>smallest Entropy</code> or{" "}
            <code>Largest Information gain.</code>
          </li>
          <li>
            The set S is then split by the selected attribute to produce a
            subset of the data.
          </li>
          <li>
            The algorithm continues to recur on each subset, considering only
            attributes never selected before.
          </li>
        </ol>
        <blockquote>
          <p>
            ID3 follows the rule — A branch with an entropy of zero is a leaf
            node and A brach with entropy more than zero needs further
            splitting.{" "}
          </p>
        </blockquote>
        <p>
          {" "}
          <img
            src="https://miro.medium.com/max/875/1*EFioClRp6FqXF_F1gznq4w.png"
            width="95%"
            alt="Decision Tree Image"
          />
        </p>
        <h2 id="-what-is-an-entropy-">
          <strong>What is an Entropy :</strong>
        </h2>
        <ul>
          <li>
            <p>
              Entropy is the measures of impurity, disorder or uncertainty in a
              bunch of examples.
            </p>
          </li>
          <li>
            <p>
              Entropy controls how a Decision Tree decides to split the data. It
              actually effects how a Decision Tree draws its boundaries.
            </p>
          </li>
        </ul>
        <p>
          <strong>
            <em>The Equation of Entropy :</em>
          </strong>
        </p>
        <p>
          <img
            src="https://miro.medium.com/max/875/1*S6zcbdAzUvIOKBaWBKp9MA.png"
            width="95%"
            alt="Decision Tree Image"
          />
        </p>
        <h2 id="-what-is-an-information-gain-">
          <strong>What is an Information gain :</strong>
        </h2>
        <ul>
          <li>
            <p>
              Information gain (IG) measures how much “information” a feature
              gives us about the class.
            </p>
          </li>
          <li>
            <p>
              Information gain is the main key that is used by Decision Tree
              Algorithms to construct a Decision Tree.
            </p>
          </li>
          <li>
            <p>
              Decision Trees algorithm will always tries to maximize Information
              gain.
            </p>
          </li>
          <li>
            <p>
              An attribute with highest Information gain will tested/split
              first.
            </p>
          </li>
        </ul>
        <p>
          <strong>
            <em>The Equation of Entropy :</em>
          </strong>
        </p>
        <p>
          <img
            src="https://miro.medium.com/max/875/1*bVGWGETTor7bSnhr7sXEVw.png"
            width="95%"
            alt="Decision Tree Image"
          />
        </p>
        <hr></hr>
        <h2 id="-inductive-bias-">
          <strong>Inductive bias :</strong>
        </h2>
        <ul>
          <li>
            <p>
              The inductive bias (also known as learning bias) of a learning
              algorithm is the set of assumptions that the learner uses to
              predict outputs of given inputs that it has not encountered.
            </p>
          </li>
          <li>
            <p>
              The kind of necessary assumptions about the nature of the target
              function are subsumed in the phrase inductive bias.
            </p>
          </li>
        </ul>
        <hr></hr>
        <ul>
          <li>
            <h3 id="-create-a-decision-tree-for-given-table-">
              <strong>
                <em>Create a Decision tree for given table :</em>
              </strong>
            </h3>
          </li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fever</th>
              <th>Cough</th>
              <th>Breathing issues</th>
              <th>Infected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>NO</td>
              <td>NO</td>
              <td>NO</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>2</td>
              <td>YES</td>
              <td>YES</td>
              <td>YES</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>3</td>
              <td>YES</td>
              <td>YES</td>
              <td>NO</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>4</td>
              <td>YES</td>
              <td>NO</td>
              <td>YES</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>5</td>
              <td>YES</td>
              <td>YES</td>
              <td>YES</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>6</td>
              <td>NO</td>
              <td>YES</td>
              <td>NO</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>7</td>
              <td>YES</td>
              <td>NO</td>
              <td>YES</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>8</td>
              <td>YES</td>
              <td>NO</td>
              <td>YES</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>9</td>
              <td>NO</td>
              <td>YES</td>
              <td>YES</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>10</td>
              <td>YES</td>
              <td>YES</td>
              <td>NO</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>11</td>
              <td>NO</td>
              <td>YES</td>
              <td>NO</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>12</td>
              <td>NO</td>
              <td>YES</td>
              <td>YES</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>13</td>
              <td>NO</td>
              <td>YES</td>
              <td>YES</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>14</td>
              <td>YES</td>
              <td>YES</td>
              <td>NO</td>
              <td>NO</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Steps to create decision tree for above table :</strong>
        </p>
        <h3 id="1-">1.</h3>
        <ul>
          <li>
            To solve this first we&#39;ll find our target attribute in this
            table.
          </li>
          <li>
            Here our target attribute is <code>Infected</code> column in the
            table .
          </li>
          <li>
            Now we&#39;ll calculate the Information gain of this target
            attribute.
            <h3 id="2-">2.</h3>
          </li>
          <li>Find Entropy of each attribute which are present in the table</li>
        </ul>
        <p>
          <img
            src="https://raw.githubusercontent.com/AyushJoker/content_aktu/main/assets/DTsoln.jpg"
            width="95%"
            alt="Decision tree solution"
          />
        </p>
        <h3 id="3-">3.</h3>
        <ul>
          <li>Now apply ID3 algorithm to construct the decision tree</li>
          <li>
            After applying ID3 algorithm our final decision tree will be :
            <img
              src="https://miro.medium.com/max/605/1*lmO50a4OQQiuc3cwDg217g.jpeg"
              width="95%"
              alt="Decision tree graph"
            />
          </li>
        </ul>
        <hr></hr>
        <h2 id="-issues-in-decision-tree-">
          <strong>
            <em>Issues in decision tree:</em>
          </strong>
        </h2>
        <ul>
          <li>
            <p>Determining how deeply to grow the decision tree</p>
          </li>
          <li>
            <p>Handling continuous attributes</p>
          </li>
          <li>
            <p>Choosing an appropriate attribute</p>
          </li>
          <li>
            <p>Selecton measure</p>
          </li>
          <li>
            <p>Handling traning data with missing attributes values.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ML;
