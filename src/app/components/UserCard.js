import Link from "next/link";

const UserCard = ({ user }) => {
  return (
    <Link href={`/users/${user._id}`}  className="border p-4 shadow-lg rounded-lg">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </Link>
  );
};

export default UserCard;
