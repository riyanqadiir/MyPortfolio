import { useEffect, useRef } from "react"

export default function backToTop() {
    let a = useRef("");
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                a.current.classList.add("active");
            }
            else{
                a.current.classList.remove("active");
            }
        })
    })
  return (
    <>
    {/* <div id="preloader"></div> */}

    <a ref={a} href="#" className="back-to-top d-flex align-items-center justify-content-center "><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}
