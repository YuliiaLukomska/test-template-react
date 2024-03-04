import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendContainer}>
      <img src={avatar} alt="Avatar" width="80" />
      <p className={css.friendName}>{name}</p>
      <p>
        {isOnline ? (
          <span className={css.isOnline}>Online</span>
        ) : (
          <span className={css.Offline}>Offline</span>
        )}
      </p>
    </div>
  );
};

export default FriendListItem;
