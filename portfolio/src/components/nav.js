import { useEffect, useState } from "react";

function Nav(props) {
//     const handleMouseMove = (e) => {
//         const parentRect = e.currentTarget.getBoundingClientRect();

//         // 클라이언트 좌표를 부모 요소 기준 좌표로 변환
//         const xRelativeToParent = e.clientX - parentRect.left;
//         const yRelativeToParent = e.clientY - parentRect.top;
    
//         // 이제 xRelativeToParent 및 yRelativeToParent를 사용하여 계산 및 업데이트 수행
//         const mouseXPercentage = ((xRelativeToParent / parentRect.width) - 0.5) * 2 * 13.5;
//         const mouseYPercentage = ((yRelativeToParent / parentRect.height) - 0.5) * 2 * 100;
    
//         document.documentElement.style.setProperty('--mouseX', `${mouseXPercentage}%`);
//         document.documentElement.style.setProperty('--mouseY', `${mouseYPercentage}%`);

//   };
    return (
        <div className='nav'>
            <div className="navbar">
            <div
            className="logoContainer"
          >
                    <div className='logo'
                    >SEUNGYEON'S WEB</div>
                </div>
                <div className="navbarR">
                    <div onClick={props.handleClick}>ABOUT</div>
                    <div onClick={props.projectClick}>PROJECT</div>
                    <div onClick={props.contactClick}>CONTACT</div>
                </div>
            </div>
        </div>
    )
}

export default Nav;