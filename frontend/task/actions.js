export const makeProgress = payload => ({
    type: 'MAKE_PROGRESS',
    payload
});

export const nextPhase = payload => ({
    type: 'NEXT_PHASE',
    payload
});

export const changeStage = payload => ({
    type: 'CHANGE_STAGE',
    payload
});