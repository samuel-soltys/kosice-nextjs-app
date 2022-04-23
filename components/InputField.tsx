import { Input } from "./input";

export const InputField = ({
  type,
  textValue,
}: {
  type: string;
  textValue: string;
}) => {
  return (
    <div className="input-field">
      <p>{textValue}</p>
      <Input type={type} />
    </div>
  );
};
