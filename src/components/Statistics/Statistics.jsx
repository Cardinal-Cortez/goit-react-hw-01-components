import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export function Statistics({stats, titel}){
return (
<section className={css.statistics}>
  {titel && <h2 className={css.title}>{titel}</h2>}
  <ul className={css.statList}>
{stats.map(({id, label, percentage}) => (    
    <li className={css.item} key={id}
    style={{
      backgroundColor: "#" + RandomColor(),
      width: `calc(100%${stats.length})`
      
    }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage} %</span>
    </li>
))}    
  </ul>
</section>
  )
};

Statistics.propTypes = {
  titel: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ),
};
function RandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}