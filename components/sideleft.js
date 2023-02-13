import sideleftStyles from './sideleft.module.scss'

export default function Sideleft(){
  return(
    <div className={sideleftStyles.box}>
      <div className={sideleftStyles.mar}>
        <p className={sideleftStyles.marp}>夜间主题</p>
      </div>
      <div className={sideleftStyles.sideleft}>
        <img src="/images/ggzp.png" alt="" width='240'/>
        <img src="/images/appgg2.png" alt=""/>
        <img src="/images/zzb.png" alt="" width='240'/> 
      </div>       
    </div>
  )
}