import { useState,useContext } from "react";
import App from "../App";
import { StatesContext } from "../context/EstadosPlacar";

interface Iplacar {
    thisindex: number
    thisname: string,
    thispoints: number
}

type PlacarProps = {
    placar: Iplacar,
    
}


export function Placar({ placar }: PlacarProps) {


   
    const { listPlacares,setPlacares } = useContext(StatesContext);



    function addPoints() {
        placar = {
            ...placar,
            thispoints: placar.thispoints+1
        }
        listPlacares[placar.thisindex] = placar;

        setPlacares([...listPlacares]);

    }
    function subPoints() {
        placar = {
            ...placar,
            thispoints: placar.thispoints -1
        }
        listPlacares[placar.thisindex] = placar;

        setPlacares([...listPlacares]);
    
    }

    function changeName() {
         let temp = window.prompt("Novo nome: ") as string;
        placar = {
            ...placar,
            thisname: (temp == null || temp == "")? placar.thisname: temp
        }
        listPlacares[placar.thisindex] = placar;
        setPlacares([...listPlacares]);
        
    }
    return (
        <div className="placar-container">
            <p className="placar-name" onClick={changeName}> {placar.thisname} </p>

            <div className="placar-points-container">
                <p className="placar-points">  {placar.thispoints} </p>
            </div>

            <button className="placar-button sub" onClick={subPoints}> -1 </button>
            <button className="placar-button add" onClick={addPoints}>+1</button>
        </div>
    );

}