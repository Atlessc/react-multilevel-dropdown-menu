import { navItems } from '../navItems';
import NavItems from './NavItems';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {navItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <NavItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
