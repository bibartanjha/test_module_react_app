import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ArithmeticCalculator } from "./components/ArithmeticCalculator";
import { FilteredListFruits } from "./components/FilteredListFruits";
import { Button } from "./components/Button";
import { ColorChangingText } from './components/ColorChangingText';
import { ShowMonths } from './components/ShowMonths';
import { ButtonWithBorder } from './components/ButtonWithBorder';
import { ModalWindow } from './components/ModalWindow';
import { RangeSlider } from './components/RangeSlider';

function App() {
  return (
      <div>
        <h4>The following button will make a call to the backend and get some text</h4>
        <Button />
        <h4>This follow button will changing the color of the corresponding text</h4>
        <ColorChangingText />
        <h4>The following is an arithmetic calculator. Put in valid numbers in the first and second text box, and select an operation. Then, click the equal sign, and the result will show in the third text box.</h4>
        <ArithmeticCalculator />
        <h4>The following component will show all the months in a year</h4>
        <ShowMonths />
        <h4>The following list can be filtered by your search. For instance, if you enter ar, then only words with substring ar will remain in the list.</h4>
        <FilteredListFruits />
        <h4>Hover over the button below to see a border, and use the drop down menu to the right of it to change the color of the border</h4>
        <ButtonWithBorder />
        <h4>If you click on the following button, a modal will open</h4>
        <ModalWindow />
        <h4>The following is a range slider</h4>
        <RangeSlider />
      </div>
    );
}

export default App;
