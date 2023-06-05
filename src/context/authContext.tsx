import { LoginData, UserData } from "@/schemas/users.schema";
import api from "@/services/api/api";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { ReactNode, createContext, useContext } from "react";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  signUp: (userData: UserData) => void;
  signIn: (loginData: LoginData) => void;
}

const AuthContext = createContext<authProviderData>({} as authProviderData);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const signUp = (userData: UserData) => {
    api
      .post("/users", userData)
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signIn = (loginData: LoginData) => {
    api
      .post("/login", loginData)
      .then((response) => {
        setCookie(null, "user.token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
      })
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    };
    return <AuthContext.Provider value={{ signUp, signIn }}>{children}</AuthContext.Provider>;
  };
export const useAuth = () => useContext(AuthContext);
