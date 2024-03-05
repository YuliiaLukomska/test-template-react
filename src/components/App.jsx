import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';
import userData from '../userData.json';
import friends from '../friends.json';
import Form from './Form/Form';
import FeedbackForm from './Form/FeedbackForm';

const App = () => {
  return (
    <>
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
