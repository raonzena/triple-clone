import useRollingCount from '@/hooks/useRollingCount'

const CumulativeIndicator = () => {
  const count = useRollingCount({ to: 700, duration: 2 })
  const count2 = useRollingCount({ to: 100, duration: 2 })
  const count3 = useRollingCount({ to: 470, duration: 2 })
  return (
    <div className="cumulative-indicator">
      <h3>
        <strong>{count}만 명</strong>의 여행자
      </h3>
      <h3>
        <strong>{count2}만 개</strong>의 여행 리뷰
      </h3>
      <h3>
        <strong>{count3}만 개</strong>의 여행 일정
      </h3>
    </div>
  )
}

export default CumulativeIndicator
