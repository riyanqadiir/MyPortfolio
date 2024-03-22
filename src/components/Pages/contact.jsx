import ContactTitle from "../contact/contactTitle"
import ContactMain from "../contact/contactMain"

export default function Contact() {
  return (
    <>
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <ContactTitle/>
        <ContactMain/>
      </div>
      </section>
    </>
  )
}
