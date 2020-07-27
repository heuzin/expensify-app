import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: '325425345',
        description: 'Junuary rent',
        note: 'Thi is my final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};