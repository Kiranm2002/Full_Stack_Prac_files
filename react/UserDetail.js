import { useParams } from "react-router-dom";
import { users } from "./data";

function UserDetail() {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return <h2>User not found</h2>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetail;
