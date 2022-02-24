import { ErrorContainer, ErrorText } from "./styles";

type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <ErrorContainer>
      <ErrorText>{message ? message : "Error loading data!"}</ErrorText>
    </ErrorContainer>
  );
};

export default ErrorMessage;
