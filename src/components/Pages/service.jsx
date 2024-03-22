import ServiceTitle from "../services/serviceTitle"
import ServiceCards from "../services/serviceCards"


export default function Service() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <ServiceTitle/>
        <ServiceCards/>
     </div>
    </section>
  )
}
