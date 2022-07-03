import AwardHistory from './AwardHistory'
import CumulativeIndicator from './CumulativeIndicator'
import TripleLogo from './TripleLogo'
import './style.scss'

const IndicatorSection = () => {
  return (
    <section className="indicator-section">
      <TripleLogo />
      <CumulativeIndicator />
      <AwardHistory />
    </section>
  )
}

export default IndicatorSection
