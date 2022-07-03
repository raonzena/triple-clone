import { cumulativeInfo } from './constants'
import CumulativeText from './CumulativeText'

const CumulativeIndicator = () => {
  return (
    <div className="cumulative-indicator">
      {cumulativeInfo.map((cumulative, index) => (
        <CumulativeText key={`cumulative_${index}`} cumulative={cumulative} />
      ))}
    </div>
  )
}

export default CumulativeIndicator
