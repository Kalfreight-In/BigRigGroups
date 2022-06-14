import React, { useState } from 'react';
import axios from 'axios';

import emailjs from 'emailjs-com';
const Contactform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [ROC, setROC] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit'); 
  const resetForm = (e) => {
    setName('');
    setEmail('');
    setMessage('');
    setSuccess(false);
    setError(false);
    setErrorMessage('');
    setButtonText('Submit');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    // emailjs.sendForm('service_2vrcmgl', 'template_w4rsa4r', form.current).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    let data = {
      name: name,
      email: email,
      message: message,
      phoneno: phoneno,
    };

    axios
      .post('http://localhost:5000/api/v1', data)
      .then((res) => [setSuccess(true), resetForm()])
      .catch(() => {
        setError(true);
        console.log('Message not sent');
      });
  };

  return (
    <div
      id="shadow"
      className="p-8 rounded-3xl shadow-2xl flex justify-center items-center md:-mt-0 -mt-24  "
    >
      <form class="w-full max-w-md" onSubmit={(e) => handleSubmit(e)}>
        <div className=" ">
          <h1 className="text-Heading text-heading font-bold ml-4 md:block hidden">
            Contact Us
          </h1>
          <p className="text-neautralform  font-Poppins text-md font-bold  my-2 ml-4 md:mt-0 mt-20">
            Hey! How can we help you today?
          </p>{' '}
          <br />
          {/* <p className="text-neautralform  font-Poppins text-md font-bold  my-1 mb-3 ml-4">
            Fill in this form for an on-point solution in no time.
          </p> */}
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 input-group">
            {/* <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label> */}
            <input
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block  bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white md:w-56 w-80 md:ml-0 ml-Input"
              id="grid-first-name"
              type="text"
              placeholder="Name"
              value={name}
              required
            />
            {/* <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>

          <div class="w-full md:w-1/2 px-3">
            <div class="w-full px-3">
              {/* <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label> */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                class="appearance-none block  bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 md:w-56 w-80 md:ml-0 ml-1"
                id="email"
                placeholder="Email Address"
                type="email"
                required
              />
              {/* <p class="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p> */}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          {/* <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              type="text"
              list="cars"
              onChange={(e) => setROC(e.target.value)}
              value={ROC}
              placeholder=" &nbsp; Reason for contacting"
              className="border block bg-white text-gray-700  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 md:w-56 w-80 md:ml-0 ml-4"
              required
            />
            <datalist id="cars">
              <option>buy truck</option>
              <option>buy trailers</option>
            </datalist>  
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div> */}

          <div class="w-full md:w-1/2 px-3">
            <div class="w-full px-3">
              {/* <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label> */}
              <input
                onChange={(e) => setphoneno(e.target.value)}
                value={phoneno}
                class="appearance-none block  bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 md:w-56 w-80 md:ml-0 ml-1"
                id="email"
                placeholder="Mobile No"
                type="Phone"
                required
              />
              {/* <p class="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p> */}
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            {/* <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label> */}
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              class=" no-resize appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-24 resize-none md:w-texarea w-80 md:ml-0 ml-4"
              id="message"
              placeholder="What can we do for you?"
            ></textarea>
            {/* <p class="text-gray-600 text-xs italic">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p> */}
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div>
            <button className="text-white bg-Lightblue md:rounded rounded-md p-4 md:px-0 px-40 w-28 mt-2 ml-4 flex justify-center items-center">
              {buttonText}
            </button>
          </div>

          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
