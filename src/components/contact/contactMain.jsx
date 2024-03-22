import ContactForm from "./contactForm"
import ContactInfo from "./contactInfo"


export default function ContactMain() {
    let contactInfo = {
        address:"House # 6 , Street # 10 , Samitown , Lahore , Pakistan",
        email:"rayyanbhatti@gmail.com",
        phoneNo:"+923097795934"

    }
  return (
    <div className="row mt-5">
        
            <ContactInfo Address={contactInfo.address} Email={contactInfo.email} PhoneNo = {contactInfo.phoneNo}/>
            <ContactForm/>
    </div>
  )
}
