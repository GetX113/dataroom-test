
const initialState = { 
    
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        
        case 'FETCH_HISTOIRE_BEGIN':
            return { ...state, loading: true, error: null};
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload,};
        default:
            return state;
    }
}

export const fetchHistoireBegin = () => ({
    type: 'FETCH_HISTOIRE_BEGIN'
});

