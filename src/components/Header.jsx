// sfc -> komponente erstellen

import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <h3>Hello There</h3>
      <h2 className="headline">We Are Glint</h2>
      <p className="header-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
        distinctio iste qui dolorem exercitationem sapiente quisquam aliquid,
        nihil numquam quia, voluptates, enim maxime nisi dolorum minus expedita
        illum perspiciatis quaerat illo odit perferendis saepe odio. Quasi
        corporis culpa placeat ad deleniti ex laudantium recusandae esse quis.
        Dicta temporibus magni repellat.
      </p>
      <article>
        <div>
          <h2>127</h2>
          <p>Award Received</p>
        </div>
        <div>
          <h2>1505</h2>
          <p>Cups of Coffee</p>
        </div>
        <div>
          <h2>109</h2>
          <p>Projects Completed</p>
        </div>
        <div>
          <h2>102</h2>
          <p>Happy Clients</p>
        </div>
      </article>
    </header>
  );
};

export default Header;
