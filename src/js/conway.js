import {
  toMooreNeighborIxs,
  toNeumannNeighborIxs,
} from './gridUtil';

export const LIVE_RULES = [
  [(liveNeighborCount) => liveNeighborCount === 0, () => false],
  [(liveNeighborCount) => liveNeighborCount === 1, () => false],
  [(liveNeighborCount) => liveNeighborCount === 2, () => true],
  [(liveNeighborCount) => liveNeighborCount === 3, () => true],
  [() => true, () => false],
];

export const DEAD_RULES = [
  [(liveNeighborCount) => liveNeighborCount === 3, () => true],
  [() => true, () => false],
];

export const toImposedRules = (cellState, activeNeighborCount) => {
  const rules = cellState ? LIVE_RULES : DEAD_RULES;
  const [, updateFn] = rules.find(([rule]) => rule(activeNeighborCount));
  return updateFn(cellState);
};

export const updateState = (state) => {
  return state.map((cellState, ix) => {
    const neighborIxs = toMooreNeighborIxs(ix);
    const activeNeighborCount = neighborIxs.filter((ix) => state[ix]).length;
    return toImposedRules(cellState, activeNeighborCount);
  });
};