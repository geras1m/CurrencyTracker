import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@constants/theme/theme';
import { Modal } from '@components/Currencies/Modal';
import { IModalData } from '@root/types';
import axios from 'axios';
import { userEvent } from '@testing-library/user-event';

const mockAxiosData = {
  meta: { last_updated_at: '2024-03-10T23:59:59Z' },
  data: {
    BYN: { code: 'BYN', value: 1.5 },
    EUR: { code: 'EUR', value: 1.56 },
    SEK: { code: 'SEK', value: 1.8 },
    UAH: { code: 'UAH', value: 1.4 },
    PLN: { code: 'PLN', value: 2 },
    NOK: { code: 'NOK', value: 1.3 },
    INR: { code: 'INR', value: 0.6 },
    AUD: { code: 'AUD', value: 1.1 },
    GEL: { code: 'GEL', value: 1.4 },
    USD: { code: 'USD', value: 1 },
  },
};

const modalData: IModalData = {
  code: mockAxiosData.data.BYN.code,
  rate: mockAxiosData.data.BYN.value,
  name: 'American dollar',
};

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Conversion modal', () => {
  beforeEach(() => {
    const rootElement = document.createElement('div');
    rootElement.id = 'modal-root';
    document.body.appendChild(rootElement);
  });

  afterAll(() => jest.clearAllMocks());

  it('should render the conversion component', async () => {
    const mockFn = jest.fn();

    render(
      <ThemeProvider theme={darkTheme}>
        <Modal data={modalData} closeModal={mockFn} />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
  });

  it('should correctly show the conversion result', async () => {
    const mockFn = jest.fn();

    const dataOfDefaultComparedCurrency = mockAxiosData.data.USD;
    const typedValue = '2';
    const convertedValue = (Number(typedValue) * modalData.rate).toFixed(5);

    mockAxios.get.mockImplementation(() => Promise.resolve({ data: mockAxiosData }));

    render(
      <ThemeProvider theme={darkTheme}>
        <Modal data={modalData} closeModal={mockFn} />
      </ThemeProvider>,
    );

    await userEvent.clear(screen.getByTestId('currency-modal-input'));
    await userEvent.type(screen.getByTestId('currency-modal-input'), typedValue);

    expect(screen.getByTestId('modal-output')).toHaveTextContent(`${convertedValue} ${modalData.code}`);
    expect(screen.getByTestId('modal-output')).toHaveTextContent(
      `${typedValue} ${dataOfDefaultComparedCurrency.code}`,
    );
  });
});
