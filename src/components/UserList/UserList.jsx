import { connect } from "react-redux";
import UserItem from "../UserItem/UserItem";

function UserList({ users, filter }) {
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <div>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
