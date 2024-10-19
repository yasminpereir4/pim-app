import { useState } from "react";
import { AuthStack } from "./AuthStack";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const isAuthenticated = useState(true);

  if (isAuthenticated) {
    return <AuthStack />;
  }
  return <></>;
};
