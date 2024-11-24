"use client"
import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UserManagement: React.FC = () => {
  // Sample users data (replace with actual data fetched from an API)
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ]);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    role: 'User',
  });

  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({ id: 0, name: '', email: '', role: 'User' });
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setNewUser(user); // Pre-fill the form with the selected user's data
  };

  const handleUpdateUser = () => {
    if (editingUser) {
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? editingUser : user
      );
      setUsers(updatedUsers);
      setEditingUser(null);
      setNewUser({ id: 0, name: '', email: '', role: 'User' });
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof User) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>

      {/* Add or Edit User Form */}
      <div className="mb-6">
        <h2 className="text-xl mb-4">{editingUser ? 'Edit User' : 'Add New User'}</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => handleChange(e, 'name')}
          className="border px-4 py-2 rounded-md mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => handleChange(e, 'email')}
          className="border px-4 py-2 rounded-md mb-4 w-full"
        />
        <select
          value={newUser.role}
          onChange={(e) => handleChange(e, 'role')}
          className="border px-4 py-2 rounded-md mb-4 w-full"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button
          onClick={editingUser ? handleUpdateUser : handleAddUser}
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          {editingUser ? 'Update User' : 'Add User'}
        </button>
      </div>

      {/* User List Table */}
      <table className="w-full table-auto border-collapse mb-6">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left">Name</th>
            <th className="border-b px-4 py-2 text-left">Email</th>
            <th className="border-b px-4 py-2 text-left">Role</th>
            <th className="border-b px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border-b px-4 py-2">{user.name}</td>
              <td className="border-b px-4 py-2">{user.email}</td>
              <td className="border-b px-4 py-2">{user.role}</td>
              <td className="border-b px-4 py-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="text-yellow-600 hover:underline mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
