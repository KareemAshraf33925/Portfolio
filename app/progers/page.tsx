import dynamic from "next/dynamic";
const Skills=dynamic(
()=>import("../../components/Skills"),{
    loading:()=><p>loading...</p>,
    ssr:true
}

)
const Progers=()=>{
    return(<>
    
    <Skills/>
    
    </>)
}
export default Progers;