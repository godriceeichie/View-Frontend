import React, { createContext, useReducer } from "react";
import { User, UserState } from "../types";

const dispatch = () => {};

export const AuthContext = createContext<{
  dispatch: React.Dispatch<{ type: string; payload: User }>;
  user: User | null;
}>({ dispatch, user: null });

const authReducer = (
  state: UserState,
  action: { type: string; payload: User }
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
    user: null,
  });
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
