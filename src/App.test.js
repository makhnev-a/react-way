import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';

// test('renders learn react link', () => {
//     const {getByText} = render(<SamuraiJSApp/>);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SamuraiJSApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
