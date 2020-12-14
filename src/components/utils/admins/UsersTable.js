import React from "react";

const UsersTable = (props) => {
  const users = props.users;
  var i = 1;
  return (
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
          <th>Name</th>
          <th>User ID</th>
          <th>Count</th>
          <th>Time</th>
          <th>Created On</th>
          <th>Active Sub.</th>
          <th>Is DP</th>
          <th>Sec</th>
          <th>Branch</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <tr
                key={user.userId}
                className={`${
                  i % 2 === 0 ? "w3-green" : "w3-white"
                } w3-hover-blue`}
              >
                <td>{i++}</td>
                <td>{user.profile.name}</td>
                <td>{user.userId}</td>
                <td>{user.profile.visitCount}</td>
                <td>{user.profile.lastVisit}</td>
                <td>{user.profile.createdOn}</td>
                <td>
                  {user.activeSubject &&
                    user.activeSubject.map((sub) => {
                      return sub + " ";
                    })}
                </td>
                <td>{user.dp && user.dp.toString()}</td>
                <td>{user.profile.sec}</td>
                <td>{user.profile.branch}</td>
                <td>{user.profile.state}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default UsersTable;
