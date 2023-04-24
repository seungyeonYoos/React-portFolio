import { useEffect } from "react";
import { useState } from "react";

function MainText (){
    let [textCount, setTextCount] = useState(0);
    useEffect(()=>{
        // document.getElementById("letter").addEventListener('mouseover',() =>{
        //     setTextCount( textCount + 1 );
        //     console.log(textCount)
        // })
        document.getElementsByClassName('letter')[0].addEventListener('mouseover',() =>{
            setTextCount( textCount + 1 );
            console.log(textCount)
        })
    })

    return (
        <div className="main-text">
            <div className="main-1">
                <span className="letter" id="letter">C</span>
                <span className="letter">R</span>
                <span className="letter">E</span>
                <span className="letter">A</span>
                <span className="letter">T</span>
                <span className="letter">I</span>
                <span className="letter">V</span>
                <span className="letter">E</span>
            </div>
            <div className="main-2">
                <span className="letter">D</span>    
                <span className="letter">E</span>    
                <span className="letter">V</span>    
                <span className="letter">E</span>    
                <span className="letter">L</span>    
                <span className="letter">O</span>    
                <span className="letter">P</span>    
                <span className="letter">E</span>    
                <span className="letter">R</span>    
            </div>
            <div className="main-3">
                <span className="letter">&</span>
                <span className="letter">P</span>
                <span className="letter">U</span>
                <span className="letter">B</span>
                <span className="letter">L</span>
                <span className="letter">I</span>
                <span className="letter">S</span>
                <span className="letter">H</span>
                <span className="letter">E</span>
                <span className="letter">R</span>
            </div>
        </div>
    )
}

export default MainText;