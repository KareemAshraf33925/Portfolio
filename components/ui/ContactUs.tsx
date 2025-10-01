"use client"
import React, { useState } from "react";
// type of data
  type Formdata={
   name:string;
   email:string;
   message:string;
  }
export default function ContactUs() {
     //manage data
  const [FormData,SetFormData]=useState<Formdata>({name:"",email:"",message:""});
  // manage success message
  const [messageSuccess,setMessagesuccess]=useState<boolean>(false)
  // manage failed message
  const [messageFailed,setMessageFailed]=useState<boolean>(false)
  // manage submitting
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // handle data
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      const data = await response.json();
      if (response.ok) {
       console.log("Message send");
       
        SetFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
      setMessagesuccess(true)
      setMessageFailed(false)
    } catch (error) {
      console.log(error);
      setMessagesuccess(false)
      setMessageFailed(true)
     
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div id="contactus">
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-top md:gap-8">
      <div>
        <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
           Contact Us
          </h2>
            <div className="space-y-4 my-5">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="text-lg font-medium">Name </h2>

      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="px-4 pt-4 text-gray-900">
     Your Name
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="text-lg font-medium">Gmail</h2>

      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="px-4 pt-4 text-gray-900">
      Your Gmail
    </p>
  </details>

 
</div>

        </div>
      </div>

      <div className="shadow-md p-5">
         <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start gap-5 w-full">
          
          <input type="text"  id="name" placeholder="Name" className="py-3 px-10 w-full border border-black rounded-2xl"
          onChange={(e)=>SetFormData({...FormData,name:e.target.value})}/>
         
          <input type="email" id="email" placeholder="Info@gamil.com" className="py-3 px-10 w-full border border-black rounded-2xl"
          onChange={(e)=>SetFormData({...FormData,email:e.target.value})}/>
         
          <textarea  id="message" placeholder="Message" className="py-3 px-10 w-full border border-black rounded-2xl"
          onChange={(e)=>SetFormData({...FormData,message:e.target.value})}
          ></textarea>
         <button
          type="submit"
         
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {messageSuccess?(<p className="text-blue-600 text-2xl">The message Send</p>) :""}
        {messageFailed?(<p className="text-red-500 text-2xl">Failed Send Message</p>):""}
        </form>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
