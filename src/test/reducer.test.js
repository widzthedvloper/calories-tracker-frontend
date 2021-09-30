import '@testing-library/jest-dom';
import rootReducer from '../reducers/rootReducer';
import { checkUser } from '../action';

const user = {
    id: 1,
    email: 'widz@gmail.com',
    foods: [{id: 1, name: 'Pasta', user_id: 1}],
    calories: []
}

it('Ensures the reducer has an initial value', () => {
    expect(rootReducer([], {})).not.toEqual(undefined);
})

it('Ensures the reducer has an initial value', () => {
    expect(rootReducer([], {})).not.toEqual([]);
})

it('Ensures the reducer has an initial value', () => {
    expect(rootReducer([], user)).not.toEqual(undefined);
})

it('Ensures the reducer has one user', () => {
    expect(checkUser({type: 'LOG-USER', user})).not.toEqual(undefined);
})