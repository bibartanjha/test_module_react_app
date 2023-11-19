import axios from 'axios';

/* eslint-disable-next-line */
export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const handleOnClick = async () => {
    try {
      const response = await axios.get('http://localhost:8080/testData');
      console.log(response.data);
      alert(JSON.stringify(response.data));

      if (props.onClick) {
        props.onClick();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data.");
    }
  };

  return (
    <div>
      <button onClick={handleOnClick}>{props.label || 'Press me!'}</button>
    </div>
  );
}

export default Button;
