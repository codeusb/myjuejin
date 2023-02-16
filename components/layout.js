import Header from './header'
import Styles from './layout.module.scss'

//布局
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={Styles.main}>{ children }</main>
    </>
  )
}