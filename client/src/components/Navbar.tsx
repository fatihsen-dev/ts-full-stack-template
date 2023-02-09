import { NavLink } from "react-router-dom";

export default function Navbar() {
   return (
      <ul className='bg-dark text-light p-2 flex items-center gap-2'>
         <NavLink to='/'>Page One</NavLink>
         <NavLink to='/pagetwo'>Page Two</NavLink>
         <NavLink to='/randompage'>Random Page</NavLink>
      </ul>
   );
}
