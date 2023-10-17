import "../styles/Firstsection.scss";

const Firstsection = () => {
  return (
    <section className="first">
      <div className="headline">
        <h2>What We Do</h2>
        <h1>We've got everything you need to launch and grow your business</h1>
      </div>

      <article>
        <div className="item">
          <img src="/img/brush.svg" alt="icon" />
          <div className="text">
            <h2>Brand identity</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              mollitia numquam explicabo dolor quo facere laboriosam tempora
              autem. Distinctio voluptas similique officia nostrum est cum?
            </p>
          </div>
        </div>

        <div className="item">
          <img src="/img/object-select.svg" alt="icon" />
          <div className="text">
            <h2>Illustration</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              mollitia numquam explicabo dolor quo facere laboriosam tempora
              autem. Distinctio voluptas similique officia nostrum est cum?
            </p>
          </div>
        </div>

        <div className="item">
          <img src="/img/megaphone.svg" alt="icon" />
          <div className="text">
            <h2>Marketing</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              mollitia numquam explicabo dolor quo facere laboriosam tempora
              autem. Distinctio voluptas similique officia nostrum est cum?
            </p>
          </div>
        </div>

        <div className="item">
          <img src="/img/globe-line.svg" alt="icon" />
          <div className="text">
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              mollitia numquam explicabo dolor quo facere laboriosam tempora
              autem. Distinctio voluptas similique officia nostrum est cum?
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Firstsection;
