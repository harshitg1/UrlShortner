import {useEffect, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

const Linkresult = ({inputValue}) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    

    const fetchData = async() => {
      try{
        setLoading(true);
        const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        setShortenLink(res.data.result.full_short_link);
      }
      catch(err){
       setError(err);
      }
      finally{
        setLoading(false);
      }
    }
    useEffect(() => {
      if(inputValue.length) {
        fetchData();
      }
    }, [inputValue]);
    

    useEffect(() => {
        const timer = setTimeout(() => {
          setCopied(false);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [copied]);
      if(loading) {
        return <p>Loading...</p>
      }
      if(error) {
        return <p >Disallowed Link :(</p>
      }



  return (
    <>
    {shortenLink && (
      <div className="result flex flex-row items-center justify-center">
        <div className="p-3 rounded-lg border bg-black text-white border-white">{shortenLink}</div>
        <CopyToClipboard
          className ="border border-black  rounded-lg p-2 m-4"
          text={shortenLink}
          onCopy={() => setCopied(true)}
        >
          <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
        </CopyToClipboard>
      </div>
    )}
  </>
   
  )
}

export default Linkresult