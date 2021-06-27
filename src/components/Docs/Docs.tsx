import './pyo2.css'
const Docs = () => {
  return (
    <div style={{ overflowY: "scroll" }}>
      <div className="dlogo">
        <h1>ESLA</h1>
      </div>
      <header>
        <nav>
          <ul className="nav_links">
            <li>ABOUT</li>
            <li>
              <a href="#text">TEXT </a>
            </li>
            <li>
              <a href="#link">LINK </a>
            </li>
            <li>
              <a href="#pic">PICTURE </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="d1">
        <section id="s1">
          <p className="sidehm">ABOUT</p>
          <br />

          <p className="sideh">
            One of the major problems of this modern world is "Fake News". Fake
            News is like a forest fire; infact it spreads faster and is more
            menacious than a forest fire. These days numerous Fake News are
            being circulated all over the world. There are often cases where
            people by trusting such news have faced a lot of loss like financial
            loss, psychological problems etc.
          </p>
          <br />
          <p className="sideh">
            Especially in times of pandemic, a lot of Fake News is transmitted
            across the globe which is creating a havoc among the people of this
            planet. Fake News about the availability of vaccinations,beds in the
            hospital and also about the severity of the situation is being
            spread which further on reaching the common people is developing a
            fear in them and weakening their minds. Not only this, people also
            started to buy the vaccinations and other resources in advance
            spending lakhs of money into it.
          </p>
          <br />
          <p className="sideh">
            Instead of trusting the Fake News blindly if they had an option of
            verifying the news; all this could be avoided.Inorder to avoid such
            disastrous situations, PyO2 Team has developed the 'ESLA' software.
            ESLA software is a perfect solution for the Fake News. Using Esla
            one can determine whether the news they received is true or false.
          </p>
          <br />
          <p className="sideh">
            All we need to do is give the news recieved by you as an input to
            ESLA and then ESLA will verify the news for us. It is as simple as
            that. ESLA not only accepts the input in the form of textbut also in
            the form of link or a photograph; Making the usage of software more
            convenient for the user.
          </p>
        </section>
      </div>
      <br />
      <div className="d2">
        <section>
          <p className="sidehm" id="text">
            TEXT{" "}
          </p>
          <br />
          <p className="sideh">
            {" "}
            ESLA software accepts input in the form of text. If any messages are
            sent to you in the form of text through whatsapp, gmail or any other
            sources and you want to verify it; then all one has to do is select
            the text, copy it and paste it into ESLA as an input. Rest of the
            work is done by ESLA on its own. ESLA will cross check the
            information given to it and declare it as true or false.
          </p>
        </section>
      </div>
      <br />
      <div className="d3">
        <section>
          <p className="sidehm" id="link">
            LINK{" "}
          </p>
          <br />
          <p className="sideh">
            {" "}
            ESLA software accepts input in the form of link. If one wants to
            verify the information that is displayed on certain website or if
            any link is forwarded to you by any of your contact or by any random
            person then all you have to do is copy the link and give it as an
            input to ESLA. Rest of the work is done by ESLA on its own. ESLA
            will cross check the information given to it and declare it as true
            or false.
          </p>
        </section>
      </div>
      <br />
      <div className="d4">
        <section>
          <p className="sidehm" id="pic">
            PICTURE{" "}
          </p>
          <br />
          <p className="sideh">
            {" "}
            ESLA software accepts input in the form of picture. Most of the Fake
            News in present times is transmitted in the form of images or
            pictures through whatsapp, facebook etc. so one must be able to
            verify the news of the images as well and ESLA provides the users
            with that feature as well. All one must do is upload the image you
            have received into ESLA as an input and Rest of the work is done by
            ESLA on its own. ESLA will cross check the information given to it
            and declare it as true or false.
          </p>
        </section>
      </div>

      <br />
      <p className="sideh">condition: recent news can't be verified by ESLA</p>
      <br />
      <div className="sd">
        <p id="pic1" className="sideh">
          sample picture 1
        </p>
        <img src="/images/w1.jpeg" alt="sample 1" width="" />
        <br />
        <p id="pic2" className="sideh">
          sample picture 2
        </p>
        <img src="/images/w2.jpeg" alt="sample 2" />
      </div>
      <div className="d5">
        <section id="bot">
          <p id="botConv" className="sidehm">
            CHAT BOT
          </p>
          <br />
          <p className="sideh">
            ESLA provides a user interactive computer program known as “Chat
            bot”. As a User, you can directly have a conversation with chat bot.
            It will answer multiple queries of yours. Example conversation:
            User: hi Chat bot: Hello! User: what input do you accept? Chat bot:
            I accept all kinds of input User: Thank you Chat bot: happy to help!
          </p>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        <h1 className="sidef">Thank You</h1>
      </footer>
    </div>
  );
};

export default Docs;