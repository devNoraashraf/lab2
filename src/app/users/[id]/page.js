"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";

export default function UserPage() {
  const params = useParams();
  const userId = params?.id;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      {user ? (
        <>
          {}
          <head>
            <title>{`${user.name} - User Profile`}</title>
            <meta name="description" content={`Profile of ${user.name}. Contact: ${user.email}`} />
            <meta property="og:title" content={`${user.name} - User Profile`} />
            <meta property="og:description" content={`Profile of ${user.name}. Contact: ${user.email}`} />
            <meta property="og:type" content="profile" />
            <meta property="og:url" content={`/users/${userId}`} />
          </head>

          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-700">Phone: {user.phone}</p>
        </>
      ) : (
        <p className="text-red-500">User not found</p>
      )}
    </div>
  );
}
