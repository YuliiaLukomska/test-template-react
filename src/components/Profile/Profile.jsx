import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.userInfoWrapper}>
        <img className={css.userPhoto} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.activityInfoWrapper}>
        <li className={css.activitySection}>
          <span>Followers</span>
          <span className={css.activityNumbers}>{stats.followers}</span>
        </li>
        <li className={css.activitySection}>
          <span>Views</span>
          <span className={css.activityNumbers}>{stats.views}</span>
        </li>
        <li className={css.activitySection}>
          <span>Likes</span>
          <span className={css.activityNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
