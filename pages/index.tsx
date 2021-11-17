// @ts-check
import Head from 'next/head'
import Header from '../components/header';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import styles from '../components/home.module.css'
import Image from 'next/image'
import Link from 'next/link'


//api key cb87b2d6cd4b41358956a9b00362ecc2
// https://api.rawg.io/api/genres?key=cb87b2d6cd4b41358956a9b00362ecc2

export const getStaticProps: GetStaticProps = async()=>{
  console.log(`${process.env.genresUrl}${process.env.apiKey}`)
  const res = await fetch('https://api.rawg.io/api/genres?key=cb87b2d6cd4b41358956a9b00362ecc2')
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  //console.log(res)
  return {
    props: { data }, // will be passed to the page component as props
  }
  }
  
export default function Home({data}) {
  return(
  <div className="container">
    <Head>
      <title>Game</title>
    </Head>
   
      <Header/> 
      
      <main>
        <p>SALUT</p>
        <div className={styles.grid}>
          { data.results.map((item => 
                                  <Link href="/genre/index">
                                    <div id='picindex'>
                                      <p>{item.name}</p>
                                      <Image
                                        src={item.image_background}
                                        alt="img"
                                        width={500}
                                        height={500}
                                      /> 
                                    </div>
                                  </Link>
          ))
                                        
          }
          
        
        </div>
      </main>
   

  </div>
  );
}


            