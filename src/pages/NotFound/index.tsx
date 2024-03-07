import Image404 from '@assets/404-error-image.svg';
import { Container } from '@components/App/styled';
import { ImageWrapper } from '@pages/NotFound/styled';

const NotFound = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image404 />
      </ImageWrapper>
    </Container>
  );
};

export default NotFound;
