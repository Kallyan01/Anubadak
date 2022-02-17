import React,{useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
function Loadingtrans() {
    let [color, setColor] = useState("#ff0000");
    const loading = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background:'red'
    }
    return (
        <div className="loadingtrans" style={loading}>
            <ClipLoader color={color} loading={true}  size={50} />
        </div>
    )
}

export default Loadingtrans