import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  describe('App-header', () => {
    test('renders header and text', () => {
      //TODO maybe move to a render function -AO
      render(<App />);
      //TODO change this to use Header Component -AO
      const linkElement = screen.getByText('Data Analysis for Beer Club');
      expect(linkElement).toBeInTheDocument();
    })
  })
  describe('App-body', () => {
    //TODO move this when wrapper is created -AO
    describe('wrapper', () => {
      describe('subHeader-text', () => {
        //TODO Add test for dynamic rendering of Name -AO
        test('renders body and subHeader text', () => {
          //TODO change to render function -AO
          render(<App />);
          const linkElement = screen.getByText('Consumption per Member: Beer consumed by Steve');
          expect(linkElement).toBeInTheDocument();
        })
      })
    })
  })
})
