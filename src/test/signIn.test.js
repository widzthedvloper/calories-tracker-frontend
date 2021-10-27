import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

it('renders button correctly', () => {
    const tree = renderer
    .create(<button>Sign In</button>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders link correctly', () => {
    const tree = renderer
    .create(<a>Create a new account</a>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders label correctly', () => {
    const tree = renderer
    .create(<label>Email</label>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders button correctly', () => {
    const tree = renderer
    .create(<button>Sign Up</button>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders link correctly', () => {
    const tree = renderer
    .create(<a>Already have an account? Sign In!</a>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders title correctly', () => {
    const tree = renderer
    .create(<h1>Calories Tracker</h1>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders link correctly', () => {
    const tree = renderer
    .create(<a>Add Food</a>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders link correctly', () => {
    const tree = renderer
    .create(<a>Dash</a>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders link correctly', () => {
    const tree = renderer
    .create(<a>Ingredient</a>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders link correctly', () => {
    const tree = renderer
    .create(<a>More</a>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})
