import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


export default function Home() {

  const [email, SetEmail] = useState('')
  const [sent, SetSent] = useState(false)

  return (
      // <div className="bg-gradient-to-r from-rose-400 to-orange-300">
      <div className="bg-[url('/kuva3-sauna.jpg')] bg-cover bg-center">
        <Head>
          <title>Peräkärrysauna</title>
          <meta name="description" content="Peräkärrysauna" />
          <link rel="icon" href="/favicon.ico" />

        </Head>

        <main className="h-screen flex flex-row justify-center bg-black/30 ">
          <div className="flex-col flex justify-center">
            <div className="mx-auto rounded overflow-hidden shadow-lg backdrop-blur-sm justify-center p-10">
              <div className="font-bold text-xl mb-2 text-gray-100 flex text-center flex justify-center">
                Olemme rakentamassa!
              </div>
              <div className="font-bold text-base mb-2 text-gray-200 flex text-center m-10">Liity odotuslistalle ja voita peräkärrysauna päiväksi!</div>

              <div className='flex flex-wrap flex-row justify-center mt-4'>
                <div className="form-control m-2">
                  <label className="input-group">
                    <span>Sähköposti</span>
                    <input type="text" placeholder="voita@sauna.com" className="input input-bordered" onChange={(x) => SetEmail(x)} />
                  </label>
                </div>
                <button className="btn btn-primary bg-lime-700 border-lime-700 hover:bg-lime-400 hover:border-lime-400 m-2">Osallistu</button>
              </div>
            </div>

          </div>
          {/*<img className="w-16 md:w-32 lg:w-48" src="/trailer_puller.svg"/>*/}

          <footer className=" absolute  bottom-0 p-7 w-full text-center  text-base-content">
            <div>
              <p className='text-zinc-200'>puh. 0400 625 386 | saunaan@normipaivaoy.fi</p>
            </div>
          </footer>



        </main>




      </div>
  )
}
