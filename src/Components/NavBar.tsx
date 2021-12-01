import { Menu } from '@headlessui/react';
import { NavLink, useLocation } from 'react-router-dom';

import Span from './Span';

function NavBar() {
  const { pathname } = useLocation();

  return (
    <>
      <Menu>
        <Menu.Item as={NavLink} to="wines">
          {({ active }) => (
            <div className="flex justify-start">
              <Span
                text="Wines 🍷"
                active={active || pathname.includes('wines')}
              />
            </div>
          )}
        </Menu.Item>
        <Menu.Item as={NavLink} to="wineyards">
          {({ active }) => (
            <div className="flex justify-start">
              <Span
                text="Wineyards 🏡"
                active={active || pathname.includes('wineyards')}
              />
            </div>
          )}
        </Menu.Item>
        <Menu.Item as={NavLink} to="grapes">
          {({ active }) => (
            <div className="flex justify-start">
              <Span
                text="Grapes 🍇"
                active={active || pathname.includes('grapes')}
              />
            </div>
          )}
        </Menu.Item>
      </Menu>
    </>
  );
}

export default NavBar;
