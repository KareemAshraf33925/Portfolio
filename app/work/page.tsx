import dynamic from "next/dynamic";
const WorkPage=dynamic(
    ()=>import("../../components/Work"),{
        loading:()=><p>loading...</p>,
        ssr:true,
    }
)
const Work=()=>{
    return(<>
    <WorkPage/>
    
    </>)
}
export default Work;