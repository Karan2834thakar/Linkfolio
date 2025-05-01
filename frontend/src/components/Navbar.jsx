import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Linkfolio</Link>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/create">Create Portfolio</Link>
      </div>
    </nav>
  );
};

export default Navbar;
