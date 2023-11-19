import React, { Component } from 'react';

class ColorChangingText extends Component<{}, { textColor: string; clickCount: number;}> {
  constructor(props: any) {
    super(props);

    this.state = {
      textColor: 'black',
      clickCount: 0,
    };
  }

  handleButtonClick = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'black'];
    this.setState((prevState) => {
      const nextColor = colors[(prevState.clickCount % colors.length)];
      return {
        textColor: nextColor,
        clickCount: prevState.clickCount + 1,
      };
    });
  };

  render() {
    const { textColor } = this.state;

    return (
      <div>
        <button id="ChangeTextColorButton" onClick={this.handleButtonClick}>Change Color</button>
        <div id="colorChangingText" style={{ color: textColor, display: 'inline-block', marginLeft: '10px' }}>This is the changing text.</div>
      </div>
    );
  }
}

export { ColorChangingText };
