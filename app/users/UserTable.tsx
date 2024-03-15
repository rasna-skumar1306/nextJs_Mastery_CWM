import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10000 },
  }); //fetch with caching and refetching every 10000ms

  const users: User[] = await res.json();

  const sortedUsers: User[] = sort(users).by([
    {
      asc: (u) =>
        sortOrder === "name" ? u.name : sortOrder === "email" ? u.email : u.id,
    },
  ]);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      {sortedUsers.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </table>
  );
};

export default UserTable;
