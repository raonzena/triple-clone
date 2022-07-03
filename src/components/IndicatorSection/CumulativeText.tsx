import useRollingCount from '@/hooks/useRollingCount'

interface Prop {
  cumulative: {
    count: number
    unit: string
    appendText: string
  }
}

const CumulativeText = (props: Prop) => {
  const { cumulative } = props
  const count = useRollingCount({ to: cumulative.count, duration: 2 })
  return (
    <h3>
      <strong>
        {count}
        {cumulative.unit}
      </strong>
      {cumulative.appendText}
    </h3>
  )
}

export default CumulativeText
