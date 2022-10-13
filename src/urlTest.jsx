import React from 'react'
import { useSelector } from "react-redux";

function UrlTest() {
    const url = useSelector((state) => state.url.value);
    console.log("store", url.url);
  return (
    <div>
        <form>
            <label>Enter your name:
                <input
                type="text" 
                value={url.url}
                // onChange={(e) => setName(e.target.value)}
                />
            </label>
            </form>
            <p>Url: {url.url}</p>
    </div>
  )
}   

export default UrlTest