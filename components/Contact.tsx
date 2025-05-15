"use client"
import "../styles/contact.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useState } from "react";
// type of pointer
type Pointer={
    x:number;
    y:number;
  }
  // type of data
  type Formdata={
   name:string;
   email:string;
   message:string;
  }
const Contact=()=>{
  // state manage pointer
  const[pointer,setpointer]=useState<Pointer>({x:0,y:0});
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
    return(<>
    <section className="contact"
     onPointerMove={e=>{
      setpointer({
        x:e.clientX,
        y:e.clientY
      })}
    }
    >
        <div className="pointer" 
      style={{
        position:"fixed",
        transform:`translate(${pointer.x}px,${pointer.y}px)`,
        top:-10,
        left:-10,
        width:"20px",
        height:"20px",
        borderRadius:"50%",
        backgroundColor:"white",
        pointerEvents:"none",
        zIndex:999
      }}
      ></div>
      <h2>Contact Me</h2>
      <div className="content">
        <div className="contact-content">
        <div className="IformationContact">
      <Accordion type="single" collapsible>
        {/* name */}
     <AccordionItem value="item-1">
     <AccordionTrigger className="capitalize text-xl">Name</AccordionTrigger>
     <AccordionContent className="capitalize text-lg">
    Your Name
    </AccordionContent>
     </AccordionItem>
     {/* email */}
     <AccordionItem value="item-2"  className="mt-3">
     <AccordionTrigger className="capitalize text-xl">Gmail</AccordionTrigger>
     <AccordionContent className=" text-lg">
     Your Gmail
    </AccordionContent>
     </AccordionItem>
     </Accordion>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text"  id="name" placeholder="Name"
          onChange={(e)=>SetFormData({...FormData,name:e.target.value})}/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Info@gamil.com"
          onChange={(e)=>SetFormData({...FormData,email:e.target.value})}/>
          <label htmlFor="message">Message</label>
          <textarea  id="message" placeholder="Message" 
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

    </section>
      </>)
}
export default Contact;