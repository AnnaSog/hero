const initialState = {
    heroes: [
        {
            id: 1,
            name: "Первый герой",
            description: "Первый герой в рейтинге!",
            element: "fire"
        },
        {
            id: 2,
            name: "Неизвестный герой",
            description: "Скрывающийся в тени",
            element: "wind"
        },
        {
            id: 3,
            name: "Морской герой",
            description: "Как аквамен, но не из DC",
            element: "water"
        }
    ],
    heroesLoadingStatus: 'idle',
    filters: [
        "all",
        "fire",
        "water",
        "wind",
        "earth"
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroes: action.payload
            }
        case 'HERO_DELETED':
            const newHeroList = state.heroes.filter(item => item.id !== action.payload);
            return {
                ...state,
                heroes: newHeroList
            }
        default:
           return state;
    }
}


export default reducer;