import data from './data.json'

export const Statistics = () => {
return (
    
<section class="statistics">
  <h2 class="title">Upload stats</h2>
{data.map((d) => (
  <ul class="stat-list">
    <li class="item" key={d.id}>
      <span class="label">{d.label}</span>
      <span class="percentage">{d.percentage}</span>
    </li>
  </ul>
))}
</section>
)};