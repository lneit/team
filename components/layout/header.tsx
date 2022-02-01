import Link from 'next/link';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link href='/'>Back</Link>
      </div>
    </header>
  );
};

export default Header;
