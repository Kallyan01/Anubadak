import React, { useState, useEffect } from 'react'
import './transbox.css'
import axios from 'axios'
function Translatebox() {
    const [Text, setText] = useState(' ')
    const [Output, setOutput] = useState('')
    const [ToggleTab1, setToggleTab1] = useState(1)
    const [ToggleTab2, setToggleTab2] = useState(1)
    const [From, setFrom] = useState('en')
    const [To, setTo] = useState('en')
    // useEffect(() => {
    //     if (ToggleTab1 === ToggleTab2 && ToggleTab2 < 3) {
    //         let pr;
    //         setToggleTab2(prev => pr=prev + 1)
    //         if(pr===2)
    //         setTo('de')
    //         if(pr===3)
    //         setTo('hi')
    //     }
    //     if (ToggleTab2 === 3) {
    //         setToggleTab2(prev => prev - 1)
    //         setTo('en')
    //     }
    // }, [ToggleTab1])
    // curl -X POST "https://trans.zillyhuhn.com/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=dasdasd&source=en&target=es&format=text&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    useEffect(() => {
      let recallapi= setTimeout(() => {
          console.log("called")
          console.log("From:"+From +"To:"+To)
        const params = new URLSearchParams();
        params.append('q', Text)
        params.append('source', From)
        params.append('target', To)
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx');
        axios.post('https://libretranslate.de/translate',params, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            console.log("result="+res.data)
            setOutput(res.data.translatedText)
        }).catch(err=>console.log(err))
            
        clearInterval(recallapi);
        }, 2000);
        return()=>clearTimeout(recallapi)
}, [Text,To,ToggleTab2,From])

    return (
        <div className="transbox">
            <div className="lang">
                <div className="lng-tab1">
                    <ul className="lang1" >
                        <li className={ToggleTab1 === 1 ? 'l1 active' : 'l1'} onClick={() =>{ setToggleTab1(1);setFrom('en')}}>English</li>
                        <li className={ToggleTab1 === 2 ? 'l1 active' : 'l1'} onClick={() =>{ setToggleTab1(2);setFrom('de')}}>German</li>
                        <li className={ToggleTab1 === 3 ? 'l1 active' : 'l1'} onClick={() =>{ setToggleTab1(3);setFrom('hi')}}>Hindi</li>
                    </ul>
                    <select name="" id="option" onChange={(e)=>setFrom(e.target.value)}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
                <div className="lng-tab2">
                    <ul className="lang2" >
                        <li className={ToggleTab2 === 1 ? 'l1 active' : 'l1'} onClick={() =>{ setToggleTab2(1);setTo('en')}}>English</li>
                        <li className={ToggleTab2 === 2 ? 'l1 active' : 'l1'} onClick={() =>{ setToggleTab2(2);setTo('de')}}>German</li>
                        <li className={ToggleTab2 === 3 ? 'l1 active' : 'l1'} onClick={() =>{ setToggleTab2(3);setTo('hi')}}>Hindi</li>
                    </ul>
                    <select name="" id="option" onChange={(e)=>setTo(e.target.value)}>
                        <option value="en" >English</option>
                        <option value="de" >German</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>
            </div>
            <div className="txtbox">
                <div className="txtb1">
                    <textarea name="" id="txt1" cols="50" rows="10" value={Text} onChange={(e) => {setText(e.target.value)}} placeholder='Enter Text Here...'></textarea>
                </div>
                {/* <button onClick={()=>Click===0?setClick(1):setClick(0)}>Translate</button> */}
                <div className="txtb2">
                    <textarea name="" id="txt1" value={Output} cols="50" rows="10"></textarea>
                </div>
            </div>
            
        </div>
    )
}

export default Translatebox
