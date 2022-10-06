import React from "react";

export default function RatingBox({value, setValue, setModalValue, boxValue, setBoxValue}) {

    const boxClick1 = () => {   
        setValue(1)
    }
    const boxClick2 = () => {
        setValue(2)
    }
    const boxClick3 = () => {
        setValue(3)
    }
    const boxClick4 = () => {
        setValue(4)
    }
    const boxClick5 = () => {
        setValue(5)
    }

    const openModal = () => {
        if (value === 0) {
            return
        } else { 
            setModalValue(true);
            setBoxValue(false); 
        }
    }

    if(boxValue) {
        return (
            <div style={containerStyle}>
                <div style={boxesStyle}>
                    <div style={boxStyle} onClick={boxClick1}>1</div>
                    <div style={boxStyle} onClick={boxClick2}>2</div>
                    <div style={boxStyle} onClick={boxClick3}>3</div>
                    <div style={boxStyle} onClick={boxClick4}>4</div>
                    <div style={boxStyle} onClick={boxClick5}>5</div>
                </div>
                <button type="button" style={buttonStyle} onClick={openModal}>SUMBIT</button>
            </div>
        )
    } else return
}

const containerStyle = {
    width: '280px',
    backgroundColor: 'black',
    height: '200px',
    border: '2px solid white',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',

}
const boxesStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
}
const boxStyle = {
    backgroundColor: 'yellow',
    padding: '15px 20px',
    borderRadius: '50%',
    cursor: 'pointer',
}

const buttonStyle = {
    border: 'none',
    padding: '10px 25px',
    width: '100px',
    margin: '0 auto',
    marginTop: '30px',
    fontWeight: 'bold',
    fontSize: '12px',
    cursor: 'pointer',
}