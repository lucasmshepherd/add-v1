import Head from 'next/head'
import { loginUser } from '../store/users/action'
import { wrapper } from '../store/store'
import Interface from '../components/interface.js'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Anarchist Development DAO</title>
      </Head>
      <Interface layout="default" widgets="home" />
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(loginUser())
})

export default Index