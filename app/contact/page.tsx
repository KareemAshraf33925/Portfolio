import dynamic from "next/dynamic";
const ContactPage=dynamic(
    ()=>import("../../components/Contact"),{
        loading:()=><p>loading...</p>,
        ssr:true,
    }
)
const Contact=()=>{
    return(<>
    <ContactPage/>
    </>)
}
export default Contact;