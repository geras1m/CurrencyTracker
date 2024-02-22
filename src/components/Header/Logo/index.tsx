import LogoIcon from '@assets/Logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
