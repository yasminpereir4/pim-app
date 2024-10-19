import { Text } from "react-native";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <Text className="mt-1 text-sm font-semibold text-red-500">{message}</Text>
  );
};
