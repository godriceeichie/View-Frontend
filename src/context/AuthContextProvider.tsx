import React, { createContext, useMemo, useReducer } from "react";
import { UserResponse, UserState } from "../types";

const dispatch = () => {};

export const AuthContext = createContext<{
  dispatch: React.Dispatch<{ type: string; payload: UserResponse }>;
  user: UserResponse | null;
}>({ dispatch, user: null });

const authReducer = (
  state: UserState,
  action: { type: string; payload: UserResponse }
): UserState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem("user")!) || null,
  });

  const authContextValue = useMemo(() => ({...state, dispatch}), [state, dispatch])
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
