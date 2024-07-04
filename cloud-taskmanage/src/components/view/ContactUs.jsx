import React, { useEffect, useState } from "react"

export const ContactUs = () => {
  return (
    <section>
      <ContactBanner />
      <ContactForm />
    </section>
  )
}

export const ContactBanner = () => {
  return (
    <section className="container-fluid">
      <div style={{ width: '100vw', height: '250px' }} >
        <h1>Start a conversation today!</h1>
      </div>

    </section>
  )
}

export const ContactForm = () => {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const handleMobile = (val) => {
    let checkedVal = val?.replace(/[^0-9]/ig, '')
    setMobile(checkedVal)
  }
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')


  const [formStatus, setFormStatus] = useState(true)
  const validateForm = () => {
    if (name?.length !== 0 && email?.length !== 0 && mobile?.length !== 0 && company?.length !== 0 && message?.length !== 0) {
      setFormStatus(false)
    } else {
      setFormStatus(true)
    }
  }
  useEffect(() => {
    validateForm()
  }, [name, email, mobile, company, message])

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      mobile,
      company,
      message
    }
    setName(''), setMobile(''), setEmail(''), setMessage(''), setCompany('')
    console.log('submit', payload);
  }


  return (
    <section>
      <h6 className="text-center">Want to try out our software solutions? Or speak to one of our sales representatives who can quickly<br /> understand your requirements? Fill out the form below to register your interest!</h6>
      <div className="container">
        <div className="row mt-5 mb-5" >
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <img src="./images/contact-banner.webp" alt="" />
            </div>

          </div>
          <div style={{ background: '#009999', padding: '20px' }} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div>
              <h2 className="text-white" style={{ fontSize: '34px', fontWeight: 'bold' }}>Contact Us</h2>
              <div style={{ border: '3px solid #fff', width: '12%' }}></div>
              <div className="mb-3">
                <label htmlFor="nameid">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="nameid" type="text" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailid">Email Address</label>
                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="emailid" type="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneid">Phone Number</label>
                <input className="form-control" value={mobile} onChange={(e) => handleMobile(e.target.value)} id="phoneid" type="tel" />
              </div>
              <div className="mb-3">
                <label htmlFor="companyid">Company Name</label>
                <input className="form-control" id="companyid" value={company} onChange={(e) => setCompany(e.target.value)} type="text" />
              </div>
              <div className="mb-3">
                <label htmlFor="msgid">Message</label>
                <textarea className="form-control" id="msgid" value={message} onChange={(e) => setMessage(e.target.value)} type="text" ></textarea>
              </div>
              <button onClick={() => handleSubmit()} disabled={formStatus ? true : false} className="btn btn-sm bg-white text-center w-100" style={{ color: "#009999", fontWeight: 'bold' }}>Request Free Trail</button>

            </div>

          </div>

        </div>
      </div>

    </section >
  )
}