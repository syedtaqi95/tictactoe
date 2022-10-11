export enum GameState {
  Initial,
  Player1Turn,
  Player2Turn,
  Winner,
  Tie
}

export enum SquareFill {
  Empty,
  O,
  X
}

export interface SquareState {
  fill: SquareFill
  winner: boolean | null
}