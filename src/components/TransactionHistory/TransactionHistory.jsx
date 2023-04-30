import PropTypes from 'prop-types';
import './TransactionHistory.css';

export const Transactions = ({items}) => {
  return (
    <table className = "transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      {items.map((item) => 
          <tbody key={item.id}>
              <tr>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
              </tr>
          </tbody>
      )}
</table>  
)}

Transactions.prototype = {
  items: PropTypes.array.isRequired
}