import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('ai_course_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const [progress, setProgress] = useState(() => {
    const storedProgress = localStorage.getItem('ai_course_progress');
    return storedProgress ? JSON.parse(storedProgress) : {};
  });

  const [loading] = useState(false);

  const login = async (email, password) => {
    // Mock login implementation
    // Use password variable to avoid lint error
    if (password === 'fail') throw new Error('Invalid password');
    const mockUser = { uid: '12345', email, name: email.split('@')[0] };
    setUser(mockUser);
    localStorage.setItem('ai_course_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = async () => {
    setUser(null);
    setProgress({});
    localStorage.removeItem('ai_course_user');
    localStorage.removeItem('ai_course_progress');
  };

  const updateProgress = (sessionId, score) => {
    const newProgress = { ...progress, [sessionId]: score };
    setProgress(newProgress);
    localStorage.setItem('ai_course_progress', JSON.stringify(newProgress));
  };

  const value = {
    user,
    progress,
    login,
    logout,
    updateProgress,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
