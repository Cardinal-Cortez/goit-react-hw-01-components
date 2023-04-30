import PropTypes from 'prop-types';
import './Statistics.css';

const colors = ['red', 'green', 'orange', 'blue', 'purple'];

export const Statistics = ({stats}) => {
return (
<section className="statistics">
  <h2 className="title">Upload stats</h2>
  <ul className="stat-list">
{stats.map((stat, index) => (    
    <li className="item" key={stat.id}
      style={{ backgroundColor: colors[index % colors.length] }}
    >
      <span className="label">{stat.label}</span>
      <span className="percentage"> % {stat.percentage}</span>
    </li>
))}    
  </ul>
</section>
  )
};

Statistics.prototype = {
  stats: PropTypes.array.isRequired
}