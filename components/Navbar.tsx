import { APP_TITLE } from '@/common/constants';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">{APP_TITLE}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
