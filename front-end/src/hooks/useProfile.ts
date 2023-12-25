import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useProfile = () => {
  const { token } = useAuth();

  const {data} = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      API.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  return {};
};
