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
      const response = await fetch('/api/contact', {
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
    
        <section id="contactus" className="bg-black h-dvh shadow-amber-50 flex justify-center items-center
        mx-auto max-w-screen px-4 py-10 sm:px-6 lg:px-8 ">

      <div className="shadow-md  w-3/4 h-3/4">
        <fieldset className="border border-white p-10 rounded-2xl w-full h-full ">
          <legend className=" text-white text-2xl font-bold">ContactUs</legend>
         <div className="flex justify-center items-center w-full h-full">
         <form onSubmit={handleSubmit} className="w-full translate-x-32">
           <div className="flex flex-col justify-center items-start  gap-3 w-full h-full">
          <label htmlFor="name" className="text-white font-bold">Name</label>
          
          <input type="text"  id="name"  className="  border border-white rounded-xl
          text-white h-15
          w-3/4  outline-none"
          onChange={(e)=>SetFormData({...FormData,name:e.target.value})}/>
         <label htmlFor="email" className="text-white font-bold">Email</label>
          <input type="email" id="email"  className="p-10 border border-white rounded-xl
          text-white w-3/4 outline-none h-15"
          onChange={(e)=>SetFormData({...FormData,email:e.target.value})}/>
         <label htmlFor="message" className="text-white font-bold">Message</label>
          <textarea  id="message"  className="p-10 border border-white rounded-xl
          text-white w-3/4 outline-none h-32"
          onChange={(e)=>SetFormData({...FormData,message:e.target.value})}
          ></textarea>
          <div className="flex justify-center items-center gap-5">
         <button
          type="submit"
         
          className="w-32 h-10 font-bold cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {messageSuccess?(<p className="text-blue-600 text-2xl">The message Send</p>) :""}
        {messageFailed?(<p className="text-red-500 text-2xl">Failed Send Message</p>):""}
        </div>
        </div>
        </form>
        </div>
        </fieldset>
      </div>
   
</section>


    
  )
}
