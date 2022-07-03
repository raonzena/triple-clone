import { awardInfo } from './constants'

const AwardHistory = () => {
  return (
    <ul className="award-history">
      {awardInfo.map((award, index) => (
        <li key={`award_${index}`}>
          <img src={award.icon} alt={award.alt} />
          <span>{award.text}</span>
        </li>
      ))}
    </ul>
  )
}
export default AwardHistory
