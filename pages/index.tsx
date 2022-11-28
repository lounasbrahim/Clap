import Head from 'next/head'
import Image from 'next/image'
import PlayerLayout from '../components/PlayerLayout'

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Clap - App</title>
      </Head>
      <PlayerLayout>
        <div>my componenets</div>
      </PlayerLayout>
    </>
  )
}
