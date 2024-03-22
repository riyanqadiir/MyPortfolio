
export default function ContactInfo(props) {
  const {Address,Email,PhoneNo} = props;
  return (
      <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{Address}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{Email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{PhoneNo}</p>
              </div>
            </div>
          </div>
  )
}
