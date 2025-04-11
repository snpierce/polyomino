import React, { useEffect, useState } from 'react';
import Modal from './Popup';
import Game from './Game';
import { Pieces } from '../types';
import { mockPieces, mockPlayBoard, mockSolutionBoard } from '../mockData';
import { OccupiedCellsProvider } from '../OccupiedCellsContext';

const Home: React.FC = () => {
  const [playBoard, setPlayBoard] = useState(new Map());
  const [solutionBoard, setSolutionBoard] = useState(new Map());
  const [pieces, setPieces] = useState<Pieces>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");

  function toggleModal() {
    setShowModal(!showModal);
  }

  const handleModalData = ( newText: string) => {
    setModalData(newText);
    toggleModal();
  }

  useEffect(() => {
    console.log("Pieces updated: ", pieces);
  }, [pieces]);


  const newGame = () => {
    setPlayBoard(mockPlayBoard);
    setSolutionBoard(mockSolutionBoard);
    setPieces(mockPieces);
  };

  if (!playBoard || !solutionBoard || !pieces) {
    return <div>Loading...</div>;
  }

  return (
    <OccupiedCellsProvider>
    <div> 
      <div className="game-container">
          <Game playBoard={playBoard} solutionBoard={solutionBoard} playPieces={pieces} onModalChange={handleModalData} newGame={newGame} />
      </div>
    </div>
    <Modal open={showModal} onClose={toggleModal}>
      <div>
        {modalData}
      </div>
    </Modal>
    </OccupiedCellsProvider>
  );
};

export default Home;
