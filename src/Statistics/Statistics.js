import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(item => {
          return (
            <li
              className={styles.item}
              key={item.id}
              style={{
                backgroundColor:
                  'rgb(' +
                  getRandomInt(0, 255) +
                  ', ' +
                  getRandomInt(0, 255) +
                  ', ' +
                  getRandomInt(0, 255) +
                  ')',
              }}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.node.isRequired,
};
export default Statistics;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
