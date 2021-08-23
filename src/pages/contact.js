import * as React from "react"
import Layout from "../components/Layout"

const ContactPage = () => {
  return (
    <Layout pageTitle="Contant Page">
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              similique tempore impedit tenetur iusto ad, cum esse asperiores
              nemo earum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              praesentium alias consequatur at corporis ullam a dolor amet
              repellat doloremque.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage
