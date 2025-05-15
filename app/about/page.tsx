import dynamic from "next/dynamic"
const About=dynamic(
    ()=>import("../../components/About"),
    {
        loading:()=><h1>loading...</h1>,
        ssr:true
    }
)
const AboutPage=()=>{
    return(<>
    
    <About/>
    </>)
}
export default AboutPage;