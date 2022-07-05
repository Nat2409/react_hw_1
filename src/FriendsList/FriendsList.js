import React from 'react';
import styles from './FriendsList.module.css';
// import PropTypes from 'prop-types';

function FriendsList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li key={friend.id.toString()} className={styles.item}>
          <span className={friend.isOnline ? styles.green : styles.red}></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
