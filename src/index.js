import React from 'react';
import ReactDOM from 'react-dom';
// import Profile from './Profile/Profile';
// import Statistics from './Statistics/Statistics';
// import FriendsList from './FriendsList/FriendsList';
// import TransactionHistory from './Transactions/TransactionHistory';
// import user from './json/user.json';
// import data from './json/data.json';
// import friends from './json/friends.json';
// import transactions from './json/transactions.json';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));

// ReactDOM.render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector('#root'),
// );

// ReactDOM.render(
//   <Statistics title="Upload stats" stats={data} />,
//   document.querySelector('#root'),
// );

// ReactDOM.render(<Statistics stats={data} />, document.querySelector('#root'));

// ReactDOM.render(
//   <FriendsList friends={friends} />,
//   document.querySelector('#root'),
// );
// ReactDOM.render(
//   <TransactionHistory items={transactions} />,
//   document.querySelector('#root'),
// );
