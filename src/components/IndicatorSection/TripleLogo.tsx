import triple from '@/assets/intro/image/triple2x.png'

const TripleLogo = () => {
  return (
    <figure className="triple-logo">
      <img src={triple} alt="트리플 로고 이미지" className="triple-logo-img" />
      <figcaption>2021년 12월 기준</figcaption>
    </figure>
  )
}

export default TripleLogo
