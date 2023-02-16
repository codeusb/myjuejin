import navStyles from './nav.module.scss'

//二级导航栏
function Navx(){
  return(
    <>
      <div className={navStyles.navBox}>
        <ul className={navStyles.navUl}>
          <li className={`${navStyles.navItem} ${navStyles.navItem11}`}>综合</li>
          <li className={navStyles.navItem}>关注</li>
          <li className={navStyles.navItem}>后端</li>
          <li className={navStyles.navItem}>前端</li>
          <li className={navStyles.navItem}>Android</li>
          <li className={navStyles.navItem}>人工智能</li>
        </ul>
      </div>
    </>
  )
}

export default Navx