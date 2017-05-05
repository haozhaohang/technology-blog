import { actionType } from 'Constants';

const initState = {
    list: [],
    total: 0,
    pageSize: 10,
};

export default function mobile(state = initState, { type, payload }) {
    switch (type) {
    case actionType.MOBILE_LIST_SUCCESS: {
        const { list, total } = payload.data;

        return {
            ...state,
            total,
            list,
        };
    }
    default:
        return state;
    }
}
