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
    <div className="bg-slate-700 h-screen">
      <Head>
        <title>Peräkärrysauna</title>
        <meta name="description" content="Peräkärrysauna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col justify-center">
        <h1 className='text-5xl	text-center	text-zinc-200 font-normal	font-impact'>Osallistu ja voita peräkärrysauna päiväksi!</h1>
        <div className='flex flex-wrap flex-row justify-center mt-4'>
          <div className="form-control m-2">
            <label className="input-group">
              <span>Sähköposti</span>
              <input type="text" placeholder="voita@sauna.com" className="input input-bordered" onChange={(x) => SetEmail(x)} />
            </label>
          </div>
          <button className="btn btn-primary m-2">Osallistu</button>
        </div>


        <footer className=" absolute  bottom-0 p-7 w-full text-center  text-base-content">
          <div>
            <p className='text-zinc-200'>puh. 0400 625 386 | otto.soderlund@normipaivaoy.fi</p>
          </div>
        </footer>



      </main>




    </div>
  )
}
