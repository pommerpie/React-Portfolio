import coverImage from '../assets/clouds.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>My Portfolio</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
