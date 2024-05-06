import { useState } from 'react';
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Modal from './modal/modal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}
export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://varunportfolio-one.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Handle success
        console.log('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setModalMessage('Email sent successfully!');
        setModalOpen(true);
      } else {
        // Handle failure
        console.error('Failed to send email.');
        setModalMessage('Failed to send email!');
        setModalOpen(true);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setModalMessage('Failed to send email!');
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const data = [
    {
      icons:<FiMail />,
      name:'Email',
      value:"rajavarun216@gmail.com"
    },
    {
      icons:<FiPhone />,
      name:'Phone',
      value:"+91 7339635360"
    },
    {
      icons:<GoLocation />,
      name:'Address',
      value:"Krishnagiri"
    }
  ]
  return (
    <div className="relative container mx-auto px-4 py-8">
      <span className='font-caveat absolute left-auto bottom-0 z-[-1] w-100 text-[250px] md:text-[350px] opacity-5 font-semibold leading'>contact</span>
      <h5 className='text-center font-bold text-3xl my-2'>CONTACT US</h5>
      <p className='font-caveat font-semibold text-2xl text-center my-4'><span className='text-primary dark:text-darkprimary'>LET’S</span>  Talk About Ideas</p>
      
      <div className="grid md:grid-cols-12 mt-4 items-center justify-center">
        <div className="md:col-span-3 gap-3">
          {
            data?.map((datas,index)=>(
              <div key={index} className="flex items-center my-8 2 gap-3">
                  <div className="border-2 border-[#a3a5a7] rounded-full w-10 h-10 flex justify-center items-center">
                   {datas.icons}
                  </div>
                  <div>
                      <p className="font-semibold font-caveat text-2xl">{datas.name}</p>
                      <span>{datas.value}</span>
                  </div>
              </div>
            ))
          }
         
        </div>
        <div className="md:col-span-1"></div>
        <div className="md:col-span-6">
          <form onSubmit={handleSubmit}>
            <div className="md:flex gap-14">
            <div>
              <label htmlFor="">Your Name *</label><br />
              <input type="text"  name="name" className="my-2 border-[1px] rounded-full p-2 dark:bg-transparent" onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="">Your Email *</label><br />
              <input type="email"  name="email" className="my-2 border-[1px] rounded-full p-2  dark:bg-transparent" onChange={handleChange} required/>
            </div>
            </div>
            <div>
              <label htmlFor="">Subject *</label><br />
              <input type="text"  name="subject" className="my-2 border-[1px] rounded-full p-2 md:w-5/6 dark:bg-transparent" onChange={handleChange} required/>
            </div>
            <div>
              <label htmlFor="">Message *</label><br />
              <textarea className="my-2 border-[1px] rounded-xl p-2 md:w-5/6 dark:bg-transparent" rows={4}  name="message" onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="mx-auto bg-primary dark:bg-darkprimary p-2 rounded-md text-white w-32">Send</button>
          </form>
        </div>
      </div>
      <Modal isOpen={modalOpen} message={modalMessage} onClose={closeModal} />
    </div>
  );
}
