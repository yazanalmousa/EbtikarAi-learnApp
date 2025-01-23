import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const predefinedUsers = JSON.parse(process.env.REACT_APP_USERS || "[]");


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    const foundUser = predefinedUsers.find(
      (u) => u.username === username && u.password === password
    );


    if (foundUser) {
      const token = uuidv4();
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        userName: foundUser.userName,
        avatarUrl: foundUser.avatarUrl,
        followersCount: foundUser.followersCount,
        followingCount: foundUser.followingCount,
        likesCount: foundUser.likesCount,
        token: token,
      };


      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true, message: "Login successful" };
    }

    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
