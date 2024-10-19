import { TextInput, TextInputProps } from "react-native";

export interface InputTextProps extends TextInputProps {
  variant?: "primary" | "secondary";
}

export const InputText: React.FC<InputTextProps> = ({
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#8C8A93"
      className={"p-3 rounded-xl border bg-[#F3F3F3] border-[#F3F3F3]"}
    />
  );
};
