import { useConvexAuth } from "convex/react";

export const isUserLoaded = () => {
  // eslint-disable-next-line
  const { isLoading } = useConvexAuth();
  // Combine the authentication state with the user existence check
  return isLoading;
};
