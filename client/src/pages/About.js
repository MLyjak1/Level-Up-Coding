import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

  const About = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('LevelUpCoding', 'template_ujtm5z6', form.current, 'F9KU_z9TAzL4OrKhV')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };
  
    return (
      <div className="box">
        <main className="aboutPage">
          <title className="aboutTitle flex justify-center">
            <h1 className="aboutTitle">About</h1>
          </title>
          <section className="aboutContent">

            <p className="contentDescr">
              Thanks for visiting our website! <br />
              Our goal at Level Up coding is to help people learn how to code at any
              level of experience! Feel free to navigate to the different course
              pages to watch whichever tutorial you are interested. <br />
              Please look at the information below to contact one of the developers.{" "}
              <br /> Happy coding!
            </p>
          </section>
          <section className="developers ">
            <table className="devbox">
              <tr>
                <th>Team</th>
                <th>Socials</th>
              </tr>
              <tr>
                <th>Dominic Fisher</th>
                <th>
                  <a href="https://github.com/DominicFisher18">
                    https://github.com/DominicFisher18
                  </a>
                </th>
              </tr>
              <tr>
                <th>Christy Le</th>
                <th>
                  <a href="https://github.com/christylex3">
                    https://github.com/christylex3
                  </a>
                </th>
              </tr>
              <tr>
                <th>Matthew Lyjak</th>
                <th>
                  <a href="https://github.com/MLyjak1">
                    https://github.com/MLyjak1
                  </a>
                </th>
              </tr>
              <tr>
                <th>Cody Stubblefield</th>
                <th>
                  <a href="https://github.com/Shrike6">
                    https://github.com/Shrike6
                  </a>
                </th>
              </tr>
            </table>
          </section>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="dem-boxes">
                    <label>Name</label>

                    <input type="text" name="from_name" className="message-box"/>

                </div>
                <div className="dem-boxes">
                    <label>Email</label>
                    <input type="email" name="from_email" className="message-box"/>
                </div>
                <div className="email-message">
                    <label>Message</label>
                    <textarea name="message" className="message-box"/>
                </div>
                <div>
                <input type="submit" value="Send" className="btn"/>
                </div>
            </form>
        </main>
      </div>
    );
  };
  export default About;
