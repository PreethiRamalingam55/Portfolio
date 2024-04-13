import { useState } from 'react';
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Email sent successfully!');
      } else {
        // Handle failure
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };
  return (
    <div className="relative md:h-screen container mx-auto px-4 py-8">
      <span className='font-caveat absolute left-auto bottom-0 z-[-1] w-100 text-[250px] md:text-[350px] opacity-5 font-semibold leading'>contact</span>
      <h5 className='text-center font-bold text-3xl my-2'>CONTACT US</h5>
      <p className='font-caveat font-semibold text-2xl text-center my-4'><span className='text-primary'>LET’S</span>  Talk About Ideas</p>
      
      <div className="grid md:grid-cols-12 mt-4">
        <div className="md:col-span-3 gap-3">
          <div className="flex items-center mb-2 gap-3">
              <div className="border-2 border-[#a3a5a7] rounded-full w-10 h-10 flex justify-center items-center">
                <FiMail className="" />
              </div>
              <div>
                  <p className="font-semibold font-caveat text-2xl">Email</p>
                  <span>rajavarun216@gmail.com</span>
              </div>
          </div>
          <div className="flex items-center mb-2 gap-3">
          <div className=" border-2 border-[#a3a5a7] rounded-full w-10 h-10 flex justify-center items-center">
            <FiPhone className="" />
          </div>
            <div>
                  <p className="font-semibold font-caveat text-2xl">Phome</p>
                  <span>+91 7339635360</span>
              </div>
          </div>
        </div>
        <div className="md:col-span-1"></div>
        <div className="md:col-span-6">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Your Name *</label><br />
              <input type="text"  name="name" className="my-2 border-[1px] rounded-full p-2 w-4/6" onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="">Your Email *</label><br />
              <input type="email"  name="email" className="my-2 border-[1px] rounded-full p-2 w-4/6" onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="">Subject *</label><br />
              <input type="text"  name="subject" className="my-2 border-[1px] rounded-full p-2 w-4/6" onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="">Message *</label><br />
              <textarea className="my-2 border-[1px] rounded-xl p-2" rows={4} cols={40} name="message" onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="mx-auto bg-primary p-2 rounded-md text-white w-32">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
