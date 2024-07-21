import { useUser } from "../context/UserContext";

export const useCheckLogin = () => {
  const { user } = useUser();
  const token = localStorage.getItem("token");
  return token !== null && user?.email !== null;
};
