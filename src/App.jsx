import { Profile } from "components/Profile"; 
import { Statistics } from "components/Statistics";
import { Friends } from "components/FriendList";
import { Transactions } from "components/TransactionHistory";

import user from './components/Profile/user.json';
import friends from './components/FriendList/friends.json';
import data from './components/Statistics/data.json';
import transactions from './components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        stats={data}
      />
      <Friends
        friends={friends} 
      />
      <Transactions
        items={transactions}
      />;
    </div>
  );
};
