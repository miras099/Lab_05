import { useState } from "react";
import type { User } from "./types";

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 22 },
  { name: "Diana", email: "diana@mail.com", age: 28 },
  { name: "Ethan", email: "ethan@mail.com", age: 35 }
];

function SearchApp() {

  // Typed state with generics
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Typed change event
  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);

    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // Typed mouse event
  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Search</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name..."
      />

      <button onClick={handleClear}>
        Clear
      </button>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.email}>
              {user.name} ({user.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchApp;
