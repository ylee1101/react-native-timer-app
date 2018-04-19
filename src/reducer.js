// import

// actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// action creators

const startTimer = () => {
    return {
        type: START_TIMER
    }
}

const restartTimer = () => {
    return {
        type: RESTART_TIMER
    };
}

const addSecond = () => {
    return {
        type: ADD_SECOND
    }
}


// reducer

const TIME_DURATION = 1500;

const INITIAL_STATE = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

// redux automatically sends action to reducer
reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER: 
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default: 
            return state;
    }
}

// reducer functions

const applyStartTimer = (state) => {
    return {
        ...state,
        isPlaying: true
    }
}

const applyRestartTimer = (state) => {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

const applyAddSecond = (state) => {
    if (state.elapsedTime < TIME_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}

// export action creators

export const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

// export { actionCreators }
// export reducer

export default reducer;