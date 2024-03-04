import { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  /* 1. При події onChange (це будь-яка зміна в інпуті - додати букву, видалити) - отримуємо значення поля (evt.target.value)
  і записуємо це значення в стан inputValue (для цього використовуємо сетер setInputValue).
  */
  const handleChange = evt => {
    console.log(evt.target.value);
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default Form;

// const Form = () => {
//   const handleChange = evt => {
//     console.log(evt.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <p></p>
//     </div>
//   );
// };

// export default Form;
