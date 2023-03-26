import { render, screen, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../redux/store';
import UserList from '../UserList';

async function renderComponent (): Promise<void> {
  render(
    <Provider store={store}>
      <UserList />
    </Provider>
  );

  await screen.findByRole('table');
}

test('render one row per user', async () => {
  await renderComponent();

  const tbody = document.querySelector('table tbody') as HTMLElement;
  const rows = within(tbody).getAllByRole('row');

  expect(rows).toHaveLength(10);
});

test('pagination should increase when click next button', async () => {
  await renderComponent();

  const nextBtn = screen.getByTitle(/next page/i);
  const currentPageTxt = screen.getByText(/110/i);

  user.click(nextBtn);

  expect(currentPageTxt).toHaveTextContent('2/10');
});

test('pagination previous page button should be disabled when current page equal 1', async () => {
  await renderComponent();

  const prevBtn = screen.getByTitle(/previous page/i);
  const currentPageTxt = screen.getByText(/110/i);

  expect(currentPageTxt).toHaveTextContent('1/10');
  expect(prevBtn).toHaveAttribute('disabled');
});

test('pagination next page button should be disabled when current page equal total page', async () => {
  await renderComponent();

  const nextBtn = screen.getByTitle(/next page/i);
  const currentPageTxt = screen.getByText(/110/i);

  for (let i = 1; i <= 10; i++) {
    user.click(nextBtn);
  }

  expect(currentPageTxt).toHaveTextContent('10/10');
  expect(nextBtn).toHaveAttribute('disabled');
});
