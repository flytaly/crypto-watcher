import { createSelector } from 'reselect';
import produce from 'immer';
import { appName } from '../config';

/**
 * Constants
 * */
export const moduleName = 'selected';
const prefix = `${appName}/${moduleName}`;

export const ADD_ROW = `${prefix}/ADD_ROW`;
export const ADD_COLUMN = `${prefix}/ADD_COLUMN`;
export const DELETE_ROWS = `${prefix}/DELETE_ROWS`;
export const DELETE_COLUMNS = `${prefix}/DELETE_COLUMNS`;

/**
 * Reducer
 * */

export const initialState = {
    rows: ['BTC', 'ETH', 'XRP'],
    columns: [{
        exchange: 'binance',
        quoteAsset: 'USDT',
    }, {
        exchange: 'binance',
        quoteAsset: 'BTC',
    }],
};

/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
export default (state = initialState, action) =>
    produce(state, (draft) => {
        const { type, payload } = action;
        switch (type) {
            case ADD_ROW:
                draft.rows.push(payload);
                break;
            case ADD_COLUMN:
                draft.columns.push({
                    exchange: payload[0],
                    quoteAsset: payload[1],
                });
                break;
            case DELETE_ROWS:
                if (Array.isArray(payload)) {
                    draft.rows = draft.rows.filter((elem, idx) => !payload.includes(idx));
                }
                break;
            case DELETE_COLUMNS:
                if (Array.isArray(payload)) {
                    draft.columns = draft.columns.filter((elem, idx) => !payload.includes(idx));
                }
                break;
        }
    });


/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName];
export const rowsSelector = createSelector(stateSelector, state => state.rows);
export const columnsSelector = createSelector(stateSelector, state => state.columns);


/**
 * Action Creators
 * */
export const addRow = symbol => ({
    type: ADD_ROW,
    payload: symbol,
});

export const addColumn = data => ({
    type: ADD_COLUMN,
    payload: data,
});

export const deleteRows = rowsIndexes => ({
    type: DELETE_ROWS,
    payload: rowsIndexes,
});

export const deleteColumns = columnsIndexes => ({
    type: DELETE_COLUMNS,
    payload: columnsIndexes,
});

/**
 * Sagas
 */
