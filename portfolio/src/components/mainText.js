import { useEffect, useState } from "react";
import $ from 'jquery';

function MainText (){
//   $(document).ready(function(){
    
// });

    const [counts, setCounts] = useState(new Array(25).fill(0));
    const [textColor, setTextColor] = useState('brown');
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setTextColor('brown');
      }, 2000);
  
      return () => clearTimeout(timeout);
    }, [textColor]);
  
    const letters = ['C', 'R', 'E', 'A', 'T', 'I', 'V', 'E', 'D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R', '&', 'P', 'U', 'B', 'L', 'I', 'S', 'H', 'E', 'R'];
  
    const handleMouseOver = (index) => {
      const newCounts = [...counts];
      newCounts[index] = (newCounts[index] + 1) % 4;
      setCounts(newCounts);
    };
  
    const getTextColor = (count) => {
      switch (count) {
        case 0:
          return '#3E3B37';
        case 1:
          return '#D0B069';
        case 2:
          return '#DEDDD0';
        case 3:
          return '#3E3B37';
        default:
          return '#3E3B37';
      }
    };

    return (
        <div className="main-text">
            <div className="main-1">
            {letters.slice(0, 8).map((letter, index) => (
            <span
              key={index}
              style={{ color: getTextColor(counts[index]) }}
              onMouseOver={() => handleMouseOver(index)}
            >
              {letter}
            </span>
          ))}
            </div>
            <div className="main-2">
            {letters.slice(8, 17).map((letter, index) => (
            <span
              key={index + 7}
              style={{ color: getTextColor(counts[index + 7]) }}
              onMouseOver={() => handleMouseOver(index + 7)}
            >
              {letter}
            </span>
          ))}  
            </div>
            <div className="main-3">
            {letters.slice(17).map((letter, index) => (
            <span
              key={index + 17}
              style={{ color: getTextColor(counts[index + 14]) }}
              onMouseOver={() => handleMouseOver(index + 14)}
            >
              {letter}
            </span>
          ))}
            </div>
        </div>
    )
}

export default MainText;