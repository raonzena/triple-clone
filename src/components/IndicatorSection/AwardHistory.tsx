import playStore from '@/assets/intro/image/play-store2x.png'
import badgeApple from '@/assets/intro/image/badge-apple4x.png'

const AwardHistory = () => {
  return (
    <ul className="award-history">
      <li>
        <img
          src={playStore}
          alt="2018 구글 플레이스토어 올해의 앱 최우수상 수상"
        />
        <span>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </span>
      </li>
      <li>
        <img src={badgeApple} alt="2018 애플 앱스토어 오늘의 여행앱 선정" />
        <span>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </span>
      </li>
    </ul>
  )
}
export default AwardHistory
