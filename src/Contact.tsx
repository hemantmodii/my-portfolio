import {useState, useRef} from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import contactImg from './assets/contactImg.png';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {

    e.preventDefault();
    
    if (!message || !name || !mobile || !email) {
      toast.error('Please fill all the fields');
      return;
    }
    console.log("Button clicked");
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
      toast.error('Name should contain only alphabets and spaces');
      return;
    }
    const mobileRegex = /^[789]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      toast.error('Mobile number should be 10 digits and start with 7, 8 or 9');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }
    const messageRegex = /^[\x20-\x7E]{1,250}$/;
    if (!messageRegex.test(message)) {
      toast.error('Message should be less than 250 characters');
      return;
    }
    //These attributes has to be given for email to 
    emailjs
    .sendForm("service_b7gqfxm", "template_09xj32b", form.current || '', {
      publicKey: "fXsEfXrMAUwJW_y7A",
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
        toast.success('Message sent successfully');
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error('Failed to send message');
      },
    );
  }

  return (
    <div className='bg-[#F7F9FF] text-black flex flex-col justify-center items-center space-y-6 p-6 md:p-12 rounded-2xl'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-violet-900 font-bold text-[30px] md:text-[40px] leading-[40px] md:leading-[52px]'>
          Get in Touch
        </h1>
        <p className='text-violet-900 font-medium text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-wide pt-4'>
        I'd love to hear from you! <br /> Whether you have a question, want to discuss a project, or just want to say hi, feel free to drop a message.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center md:space-x-6 w-full max-w-full'>
        <div className=' bg-[#FFFFFF] ps-8 py-0 mb-6'>
          <div>
            <h1 className='text-violet-900 font-bold text-[24px] leading-[32px]'>Leave a Message</h1>
            <p className='text-[#868686] font-normal text-[18px] leading-[28px]'>
              Fill up this form below, and I'll get back to you as soon as possible!
            </p>
          </div>
          <form className='space-y-4 my-6 w-full' ref={form}>
            <div className="relative mb-4">
              <label htmlFor="name" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-700"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="mobile" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                name="user_phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-700"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-700"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-700"
                rows={4}
                maxLength={250}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="text-right text-sm text-gray-500">{message.length}/250</div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-violet-900 text-white font-semibold rounded-full hover:bg-violet-800"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="lg:block hidden lg:w-[40%] lg:pe-8 w-full p-8"><img src={contactImg} alt="" className='rounded'/></div>
        
      </div>
    </div>
  );
}

export default Contact;
