import { useEffect } from 'react'
export default function AdInArticle(){
  useEffect(()=> {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
    catch(e){ /* ignore */ }
  },[])
  return (
    <div className="my-6">
      <ins className="adsbygoogle"
           style={{display:'block'}}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
           data-ad-slot="YYYYYYYYYYY"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  )
}
