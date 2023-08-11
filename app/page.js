import styles from './page.module.css'
import HomePage from './Components/Home/HomePage'
import Script from 'next/script'


export default function Home() {
   const GA_MEASUREMENT_ID = "G-Y26H3HW1BM" 

  return (
    <main>
      <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y26H3HW1BM" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-Y26H3HW1BM');
        `}
      </Script>


       <HomePage/>
      </div>
    </main>
  )
}
