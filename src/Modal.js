import React from "react";

export default function Modal({value, modalValue, setModalValue, setBoxValue, setValue}) {

    const closeModal = () => {
        setModalValue(false);
        setBoxValue(true);
        setValue(0);
    }

    if (modalValue) {
        return (
            <div>
                <h1>Has seleccionado {value} de 5</h1>
                <button type="button" onClick={closeModal}>VOLVER</button>
            </div>
        )
    } else return

    
}