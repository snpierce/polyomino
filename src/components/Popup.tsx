import React, { ReactElement } from "react";
import logo from '../assets/polyomino.png';
import './static/Popup.css';
import { useGameState } from "../GameStateContext";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
  }
  

  export default function Modal(props: ModalProps): ReturnType<React.FC> {
    const { time } = useGameState();

    return (props.open && 
        <div className="modal-main">
          <div className="btn-container">
            <button className="btn" onClick={props.onClose}>
              Back to puzzle X
            </button>
          </div>
          <div className="modal-body">
            <img src={logo} alt="Image" style={{ marginBottom: "20px", borderRadius: "10px", border: "2px solid black", position: "relative", height: "110px", width: "110px"}}/>
            {props.children}
            <div className="message">
              You finished in {time}.
            </div>
          </div>
        </div>
    );
  }
  