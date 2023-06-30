import React, { useState } from 'react'

export default function Services() {
    const [letsBtnState, setLetsBtnState] = useState("8px 15px")
    const [stateH5style, setStateH5style] = useState("8px 15px")



    const letsCheck = () => {
        let letsBtn = document.getElementById("letsBtn");
        let serviceInnerData = document.querySelector(".serviceInnerData");

        if (letsBtnState === "8px 15px") {
            setLetsBtnState("15px 25px")
            letsBtn.innerHTML = "Done Reading ✔️?"
            serviceInnerData.style.display = "block"
            serviceInnerData.style.border = "solid #ffe400 1px"
            serviceInnerData.style.borderRadius = "12px"
            serviceInnerData.style.padding = "15px"
        }
        else {
            setLetsBtnState("8px 15px")
            letsBtn.innerHTML = "Read Again😂"
            serviceInnerData.style.display = "none"
        }

    }

    const stateH5 = () => {
        let stateH5 = document.querySelector(".stateH5");
        let stateH5Btn = document.getElementById("stateH5id");
        let filteringH6 = document.querySelector(".filteringH6");

        setStateH5style("15px 25px");

        if (stateH5Btn.style.padding === "8px 15px") {
            setStateH5style("15px 25px")
            stateH5.style.transition = "all 588ms"
            stateH5.style.transform = "translateX(0%)"
        }
        else {
            setStateH5style("8px 15px")
            stateH5.style.transform = "translateX(-140%)"
        }
        setTimeout(() => {
                
                if(filteringH6.style.opacity === "0"){
                    filteringH6.style.opacity = "1";
                    filteringH6.style.marginTop = "25px";
                }
                else{
                    filteringH6.style.opacity = "0";
                    filteringH6.style.marginTop = "5px";
                }

        }, 1000);

    }

    return (
        <div className='bg-dark serviceWrapper' style={{ padding: "0px 0px 0px 0px", overflow: "hidden" }}>

            <div className='container text-white py-5 text-center'>
                <h1>Read Me</h1>
                <button style={{ transition: "all 500ms", padding: letsBtnState }} id='letsBtn' className='btn btn-blue my-3' onClick={letsCheck}>
                    Let's Check It Out
                </button>
                <div className='serviceInnerData my-5 mx-2' style={{ display: "none", padding: "100 1px", transition: "all 500ms" }}>
                    <h5 className='data'>Products data on Products Page is fetched using "axios".</h5>
                    <h6 className='apiH6' style={{color: "black", padding: "3px 8px", background: "orange", borderRadius: "25px", width: "max-content", margin: "25px auto"}}>Here is API: https://api.pujakaitem.com/api/products</h6>
                    <h5>"And..."</h5>
                    
                    <button className='btn btn-blue my-3' id='stateH5id' onClick={stateH5} style={{ padding: stateH5style, transition: "all 500ms"}}>What About States?</button>
                    <h5 className='stateH5' style={{ transform: "translateX(120%)" }}>Well, I used Context API for states management</h5>

                    <h6 className='filteringH6' style={{transition: "all 500ms cubic-bezier(1, -0.82, 0.06, 1.35) 0s", opacity: "0"}}>And about all functionalities of filtering, on Products page, no library was used, instead did it using JavaScript.</h6>
                </div>
            </div>

        </div>
    )
}
