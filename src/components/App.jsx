import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import userData from '../userData.json';
import friends from '../friends.json';
import Form from './Form/Form';
import FeedbackForm from './Form/FeedbackForm';
import { useEffect, useState } from 'react';
import ClickCounter from './ClickCounter';
import Modal from './Form/Modal';

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const handleClicks = () => {
    setClicks(clicks + 1);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };
  const handleY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };
  useEffect(() => {
    console.log(
      'Цей ефект має викликатись при кожному оновленні компонента App'
    );
  });

  return (
    <>
      <button onClick={handleToggle}>{isOpen ? 'Close' : 'Open'}</button>
      {isOpen && <Modal />}
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={handleX}>Undate x</button>
      <button onClick={handleY}>Update y</button>
      <ClickCounter
        value={clicks}
        isOpen={isOpen}
        updateClicks={handleClicks}
        updateIsOpen={handleToggle}
      />
      <ClickCounter
        value={clicks}
        isOpen={isOpen}
        updateClicks={handleClicks}
        updateIsOpen={handleToggle}
      />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Form />
      <FeedbackForm />
    </>
  );
};

export default App;
