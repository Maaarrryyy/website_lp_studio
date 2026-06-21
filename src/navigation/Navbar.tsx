import { NavConfig } from "./Config"
import { NavLink} from 'react-router-dom';

export const Navbar = () => {
    const left = NavConfig.nav[0];
    const center = NavConfig.nav[1];
    const right = NavConfig.nav[2];

  return (
    <nav className="w-full mx-auto bg-white  z-50 top-0 sticky px-6 py-4 text-2xl">
        <ul className="grid grid-cols-3  items-center px-6 pb-4 border-b">
            <li className="flex justify-start items-center">
                {left && (
                    <NavLink to={left.href} key={left.id}
                    >
                        {left.label}
                    </NavLink>
                )}
            </li>

              <li className="text-center">
                {center && (
                    <NavLink to={center.href} key={left.id}>
                        {center.label}
                    </NavLink>
                )}
            </li>

              <li className="flex justify-end items-center">
                {right && (
                    <NavLink to={right.href} key={left.id}>
                        {right.label}
                    </NavLink>
                )}
            </li>
        </ul>
    </nav>
  )
}
