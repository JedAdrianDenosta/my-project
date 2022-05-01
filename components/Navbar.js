const Navbar = ({ name, type }) => {
  return (
    <div className="h-full flex flex-col flex-grow items-center justify-center">
      <h1>{name}</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default Navbar;
