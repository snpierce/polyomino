import React, { useEffect, useState } from 'react';
import Modal from './Popup';
import Game from './Game';
import { Pieces } from '../types';
import { MockData } from '../mockData';
import { OccupiedCellsProvider } from '../OccupiedCellsContext';
import './static/Game.css';
import { useGameState } from '../GameStateContext';

const Home: React.FC = () => {
  const [playBoard, setPlayBoard] = useState(new Map());
  const [solutionBoard, setSolutionBoard] = useState(new Map());
  const [pieces, setPieces] = useState<Pieces>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const { gameKey, setShowTimer, setGameStarted } = useGameState();

  function toggleModal() {
    setShowModal(!showModal);
  }

  const handleModalData = ( newText: string) => {
    setModalData(newText);
    const totalDelay = pieces.length * 0.5 * 1000; // Adjust delay based on number of pieces
    console.log(totalDelay);
    setTimeout(() => {
      toggleModal();
    }, totalDelay); // 800ms is the duration of the final snap
  }

  useEffect(() => {
    newGame(gameKey);
    setShowTimer(true);
    setGameStarted(true);
  }), [];

  useEffect(() => {
    console.log("Pieces updated: ", pieces);
  }, [pieces]);


  const newGame = (key: number) => {
    const mockData = MockData(key);

    setPlayBoard(mockData.mockPlayBoard);
    setSolutionBoard(mockData.mockSolutionBoard);
    setPieces(mockData.mockPieces);
  };

  if (!playBoard || !solutionBoard || !pieces) {
    return <div>Loading...</div>;
  }

  return (
    <OccupiedCellsProvider>
      <div className="game-container">
          <Game playBoard={playBoard} solutionBoard={solutionBoard} playPieces={pieces} onModalChange={handleModalData} newGame={newGame} />
          {/* <div className="definition-container" style={{ minWidth: '150px' }}> */}
            {/* You can conditionally render definition or keep it empty */}
            {/* {gameFinished && !showModal && <WordDefinitionModal word={selectedWord} />}
          </div> */}
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
