import dynamic from "next/dynamic";
const HomePage=dynamic(
  ()=>import("../components/Home"),{
    loading:()=><p>loading...</p>,
    ssr:true
  }
)

export default function Home() {
  return (
    <>
    <HomePage/>
    </>
  );
}
