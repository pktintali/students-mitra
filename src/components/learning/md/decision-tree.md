
# Decision Tree

- Decision Tree is a Supervised learning technique that can be used for both classification and Regression problems, but mostly it is preferred for solving Classification problem.

- In a Decision tree, there are two nodes, which are the Decision Node and Leaf Node. Decision nodes are used to make any decision and have multiple branches, whereas Leaf nodes are the output of those decisions and do not contain any further branches.

- In order to build a tree, we use the CART algorithm, which stands for Classification and Regression Tree algorithm.

**General structure of a decision tree :**

![Decision Tree Image](https://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1545934190/1_r5ikdb.png)

 **Terminology related to Decision Trees :**

- **Root Node:** It represents the entire population or sample and this further gets divided into two or more homogeneous sets.
- **Splitting:** It is a process of dividing a node into two or more sub-nodes.
- **Decision Node:** When a sub-node splits into further sub-nodes, then it is called the decision node.
- **Leaf / Terminal Node:** Nodes do not split is called Leaf or Terminal node.
- *Pruning:* When we remove sub-nodes of a decision node, this process is called pruning. You can say the opposite process of splitting.
- **Branch / Sub-Tree:** A subsection of the entire tree is called branch or sub-tree.
- **Parent and Child Node:** A node, which is divided into sub-nodes is called a parent node of sub-nodes whereas sub-nodes are the child of a parent node.

----

## ID3 Algorithm :

- The ID3 algorithm builds decision trees using a top-down greedy search approach through the space of possible branches with no backtracking. A greedy algorithm, as the name suggests, always makes the choice that seems to be the best at that moment.

**Steps in ID3 algorithm :**

1. It begins with the original set S as the root node.
2. On each iteration of the algorithm, it iterates through the very unused attribute of the set S and calculates `Entropy(H)` and `Information gain(IG)` of this attribute.
3. It then selects the attribute which has the `smallest Entropy` or `Largest Information gain.`
4. The set S is then split by the selected attribute to produce a subset of the data.
5. The algorithm continues to recur on each subset, considering only attributes never selected before.

> ID3 follows the rule — A branch with an entropy of zero is a leaf node and A brach with entropy more than zero needs further splitting. 

   ![Decision Tree Image](https://miro.medium.com/max/875/1*EFioClRp6FqXF_F1gznq4w.png)

## **What is an Entropy :**

- Entropy is the measures of impurity, disorder or uncertainty in a bunch of examples.

- Entropy controls how a Decision Tree decides to split the data. It actually effects how a Decision Tree draws its boundaries.

***The Equation of Entropy :***

![Decision Tree Image](https://miro.medium.com/max/875/1*S6zcbdAzUvIOKBaWBKp9MA.png)


## **What is an Information gain :**

- Information gain (IG) measures how much “information” a feature gives us about the class.

- Information gain is the main key that is used by Decision Tree Algorithms to construct a Decision Tree.

- Decision Trees algorithm will always tries to maximize Information gain.

- An attribute with highest Information gain will tested/split first.

***The Equation of Entropy :***

![Decision Tree Image](https://miro.medium.com/max/875/1*bVGWGETTor7bSnhr7sXEVw.png)

---
## **Inductive bias :**

- The inductive bias (also known as learning bias) of a learning algorithm is the set of assumptions that the learner uses to predict outputs of given inputs that it has not encountered.

- The kind of necessary assumptions about the nature of the target function are subsumed in the phrase inductive bias.

---


- ### ***Create a Decision tree for given table :***

| ID | Fever | Cough | Breathing issues | Infected |
| -- | --    | ---   | -----            | ----     |
| 1  | NO    | NO    | NO               | NO       |
| 2  | YES   | YES   | YES              | YES      |
| 3  | YES   | YES   | NO               | NO       |
| 4  | YES   | NO    | YES              | YES      |
| 5  | YES   | YES   | YES              | YES      |
| 6  | NO    | YES   | NO               | NO       |
| 7  | YES   | NO    | YES              | YES      |
| 8  | YES   | NO    | YES              | YES      |
| 9  | NO    | YES   | YES              | YES      |
| 10 | YES   | YES   | NO               | YES      |
| 11 | NO    | YES   | NO               | NO       |
| 12 | NO    | YES   | YES              | YES      |
| 13 | NO    | YES   | YES              | NO       |
| 14 | YES   | YES   | NO               | NO       |


**Steps to create decision tree for above table :**
### 1.
   - To solve this first we'll find our target attribute in this table.
   - Here our target attribute is `Infected` column in the table .
   - Now we'll calculate the Information gain of this target attribute.
### 2.
   - Find Entropy of each attribute which are present in the table

![Decision tree solution](https://raw.githubusercontent.com/AyushJoker/content_aktu/main/assets/DTsoln.jpg)

### 3. 
   - Now apply ID3 algorithm to construct the decision tree
   - After applying ID3 algorithm our final decision tree will be : 
   ![Decision tree graph](https://miro.medium.com/max/605/1*lmO50a4OQQiuc3cwDg217g.jpeg)
   -----
   
   ## ***Issues in decision tree:***

   - Determining how deeply to grow the decision tree

   - Handling continuous attributes

   - Choosing an appropriate attribute

   - Selecton measure

   - Handling traning data with missing attributes values.