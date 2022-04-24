export const Input = ({
  type,
  identifier,
}: {
  type: string;
  identifier?: string;
}) => {
  return <input type={type} id={identifier} />;
};
