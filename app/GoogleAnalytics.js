import Script from 'next/script'

const GoogleAnalytics = (GA_TRACKING_ID) => {
  return (
    <div>
       <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}` }/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', "${GA_TRACKING_ID}");
        `}
      </Script>
    </div>
  )
}

export default GoogleAnalytics