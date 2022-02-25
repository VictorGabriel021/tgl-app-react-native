import { ErrorContainer, ErrorText } from "./styles";

type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <ErrorContainer>
      <ErrorText>
        {message ? message : "Erro ao carregar as informações!"}
      </ErrorText>
    </ErrorContainer>
  );
};

export default ErrorMessage;
