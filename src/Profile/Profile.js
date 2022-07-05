import React from 'react';
import styles from './Profile.module.css';
// import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className={styles.imgcontainer}>
          <img
            src={props.avatar}
            alt={props.username}
            className={styles.avatar}
          />
        </div>
        <p className={styles.name}>{props.username}</p>
        <p className={styles.tag}>&#64;{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsitem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.statsitem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.statsitem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
