import React, { useEffect } from 'react';

export default function ButtonsGrid() {


  useEffect(() => {

    const display = document.querySelector(`.display`)
    const equalButton = document.querySelector(`.equal_button`)
    const resetButton = document.querySelector(`.reset_button`)
    const buttons = document.querySelectorAll('.buttons');
    

    const handleClick = (event) => {


        if (event.target.textContent === "DEL") {
           display.textContent = display.textContent.slice(0, -1)
        } else {
            display.textContent = display.textContent.replace(/,/g, '') + event.target.textContent
        }

        event.target.classList.toggle("clickedAnimation")
        setTimeout(() => {
          event.target.classList.toggle("clickedAnimation")
        },200)
        
    };


    buttons.forEach((button) => {
      button.addEventListener('click', handleClick);
      
    });


    resetButton.onclick = () => {
        display.textContent = ``
        resetButton.classList.toggle("clickedAnimation")
        setTimeout(() => {
          resetButton.classList.toggle("clickedAnimation")
        },200)
    }

    equalButton.onclick = () => {
      display.textContent = eval(display.innerHTML.replace(/x/g, "*")).toLocaleString()
      equalButton.classList.toggle("clickedAnimation")
        setTimeout(() => {
          equalButton.classList.toggle("clickedAnimation")
        },200)
    }

    
    // Clean up the event listeners when the component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleClick);
      });
    };

  }, []);



  return (
    <div className="buttons_container">
      <div className="seven buttons">7</div>
      <div className="eight buttons">8</div>
      <div className="nine buttons">9</div>
      <div className="del_button buttons">DEL</div>
      <div className="four buttons">4</div>
      <div className="five buttons">5</div>
      <div className="six buttons">6</div>
      <div className="plus buttons">+</div>
      <div className="one buttons">1</div>
      <div className="two buttons">2</div>
      <div className="three buttons">3</div>
      <div className="minus buttons">-</div>
      <div className="dot buttons">.</div>
      <div className="zero buttons">0</div>
      <div className="divide buttons">/</div>
      <div className="multiply buttons">x</div>
      <div className="reset_button">RESET</div>
      <div className="equal_button">=</div>
    </div>
  );
}
