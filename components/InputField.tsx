import { Input } from "./input";

export const InputField = ({
  type,
  textValue,
  identifier,
}: {
  type: string;
  textValue: string;
  identifier: string;
}) => {
  return (
    <div className="input-field">
      <p>{textValue}</p>
      <Input identifier={identifier} type={type} />
    </div>
  );
};
