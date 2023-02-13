import Header from './header'
import Styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={Styles.main}>{ children }</main>
    </>
  )
}