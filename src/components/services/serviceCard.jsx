
export default function ServiceCard(props) {
    const {cardTitle,cardDescription,d,icon,color} = props;
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className={`icon-box iconbox-${color}`}>
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={d}></path>
                </svg>
                <i className={icon}></i>
              </div>
              <h4><a href="">{cardTitle}</a></h4>
              <p>{cardDescription}</p>
            </div>
          </div>

  )
}
