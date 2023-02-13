import textsideStyles from './textside.module.scss'

function TextSide({children}) {
  return(
    <>
      <div className={textsideStyles.boxt1}>
        <div>{children}</div>
        {/* <div className={sidetextStyles.mart1}></div> */}
        <img src="/images/textml.png" alt="" width='240'/>

        <img src="/images/textxgwz.png" alt="" width='240'/>

      </div>
    </>
  )
}

export default TextSide