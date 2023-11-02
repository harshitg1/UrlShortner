import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const Linkresult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          domain: "bit.ly",
          long_url: inputValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 5c89b0e8efd4376229443d76936e06bc8b91a999",
          },
        }
      );
      setShortenLink(res.data.link);
      console.log(res.data.link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Disallowed Link :(</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result flex flex-row items-center justify-center">
          <div className="p-3 rounded-lg border bg-black text-white border-white">
            {shortenLink}
          </div>
          <CopyToClipboard
            className="border border-black  rounded-lg p-2 m-4"
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Linkresult;
