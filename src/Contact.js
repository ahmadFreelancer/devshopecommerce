import "./index.css"

let stylesForm = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: "25px auto",
  padding: "25px",
  width: "40%",
}

export default function Contact() {
  return (
    <div className='container text-center'>
      <h2>Contact Page</h2>

      <div className='container'>
        <iframe className='w-100' height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15983.842064490478!2d74.28192773758197!3d31.518761775431102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039fdc8adad9%3A0x2b7a626ffc8984b8!2sGulshan-e-Iqbal%20Park!5e0!3m2!1sen!2s!4v1686214314344!5m2!1sen!2s" style={{ border: '0' }} allowFullScreen="" loading="lazy" title='map' referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>


      <div>
        <form method='POST' style={stylesForm} className='contactForm shadow-lg rounded' action='https://formspree.io/f/xqkovnew'>
          <div className="mb-3">
            <label htmlFor="">Send Email</label>
            <input name='text' type="name" width={185} className="form-control" id="firstName" placeholder='Your Name' />
          </div>
          <div className="mb-3">
            <input type="email" width={185} className="form-control" id="email" placeholder='email' />
          </div>
          <button type="submit" className="btn btn-blue">Submit</button>
        </form>
      </div>
    </div>
  )
}
