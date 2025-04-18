import { Board, Pieces } from './types';

type MockData = {
  mockPlayBoard: Board;
  mockSolutionBoard: Board;
  mockPieces: Pieces;
};

export const MockData = ( key: number ) => {
  const idx = key % 3;

  return { mockPlayBoard: Boards[idx][1], 
    mockSolutionBoard: Boards[idx][0], 
    mockPieces: Boards[idx][2] 
  }
}

const Boards: [Board, Board, Pieces][] = [ [new Map([
  ['0,0', 'S'], ['0,1', 'L'], ['0,2', 'A'], ['0,3', 'B'],
  ['1,0', 'T'], ['1,1', 'I'], ['1,2', 'L'], ['1,3', 'E'],
  ['2,0', 'O'], ['2,1', 'V'], ['2,2', 'A'], ['2,3', 'L'],
  ['3,0', 'W'], ['3,1', 'E'], ['3,2', 'S'], ['3,3', 'T'],
]),

new Map([
  ['0,0', 'V'], ['0,1', 'I'], ['0,2', 'A'], ['0,3', 'L'],
  ['1,0', 'E'], ['1,1', 'S'], ['1,2', 'S'], ['1,3', 'T'],
  ['2,0', 'L'], ['2,1', 'E'], ['2,2', 'T'], ['2,3', 'O'],
  ['3,0', 'L'], ['3,1', 'A'], ['3,2', 'B'], ['3,3', 'W'],
]),

[
  [{ type: 'Dot' }, [0, 1]],
  [{ type: 'Pair', direction: 'Horizontal' }, [2, 0]],
  [{ type: 'Pair', direction: 'Vertical' }, [1, 2]],
  [{ type: 'Pair', direction: 'Vertical' }, [2, 3]],
  [{ type: 'Hook', orientation: 'EastSouth' }, [0, 2]],
  [{ type: 'Hook', orientation: 'SouthEast' }, [0, 0]],
  [{ type: 'Stack', direction: 'Horizontal' }, [3, 0]],
] ] ,

[ new Map([
  ['0,0', 'M'], ['0,1', 'A'], ['0,2', 'C'], ['0,3', 'E'],
  ['1,0', 'I'], ['1,1', 'C'], ['1,2', 'O'], ['1,3', 'N'],
  ['2,0', 'C'], ['2,1', 'H'], ['2,2', 'I'], ['2,3', 'C'],
  ['3,0', 'E'], ['3,1', 'E'], ['3,2', 'L'], ['3,3', 'Y'],
]),

new Map([
  ['0,0', 'E'], ['0,1', 'E'], ['0,2', 'I'], ['0,3', 'C'],
  ['1,0', 'M'], ['1,1', 'A'], ['1,2', 'C'], ['1,3', 'C'],
  ['2,0', 'O'], ['2,1', 'E'], ['2,2', 'L'], ['2,3', 'Y'],
  ['3,0', 'I'], ['3,1', 'N'], ['3,2', 'C'], ['3,3', 'H'],
]),

[
  [{ type: 'Pair', direction: 'Horizontal' }, [0, 0]],
  [{ type: 'Pair', direction: 'Horizontal' }, [0, 2]],
  [{ type: 'Pair', direction: 'Horizontal' }, [3, 2]],
  [{ type: 'Pair', direction: 'Vertical' }, [2, 0]],
  [{ type: 'Pair', direction: 'Vertical' }, [2, 1]],
  [{ type: 'Hook', orientation: 'SouthWest' }, [1, 3]],
  [{ type: 'Stack', direction: 'Horizontal' }, [1, 0]],
] ] ,

[ new Map([
  ['0,0', 'W'], ['0,1', 'A'], ['0,2', 'V'], ['0,3', 'E'],
  ['1,0', 'H'], ['1,1', 'U'], ['1,2', 'E'], ['1,3', 'S'],
  ['2,0', 'A'], ['2,1', 'T'], ['2,2', 'E'], ['2,3', 'S'],
  ['3,0', 'M'], ['3,1', 'O'], ['3,2', 'R'], ['3,3', 'E'],
]),

new Map([
  ['0,0', 'E'], ['0,1', 'S'], ['0,2', 'M'], ['0,3', 'O'],
  ['1,0', 'S'], ['1,1', 'E'], ['1,2', 'W'], ['1,3', 'A'],
  ['2,0', 'U'], ['2,1', 'E'], ['2,2', 'H'], ['2,3', 'V'],
  ['3,0', 'R'], ['3,1', 'E'], ['3,2', 'A'], ['3,3', 'T'],
]),

[
  [{ type: 'Dot' }, [2, 3]],
  [{ type: 'Dot' }, [3, 0]],
  [{ type: 'Pair', direction: 'Horizontal' }, [0, 2]],
  [{ type: 'Pair', direction: 'Horizontal' }, [3, 2]],
  [{ type: 'Pair', direction: 'Vertical' }, [0, 0]],
  [{ type: 'Pair', direction: 'Vertical' }, [0, 1]],
  [{ type: 'Hook', orientation: 'EastSouth' }, [2, 0]],
  [{ type: 'Hook', orientation: 'Standard' }, [1, 2]],
] ] ]
