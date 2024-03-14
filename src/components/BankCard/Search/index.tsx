import {
  ElasticSearchContainer,
  ElasticSearchItem,
  SearchContainer,
  SearchImage,
  SearchInput,
  SearchInputContainer,
  SearchTitle,
} from '@components/BankCard/Search/styled';
import { CurrenciesList } from '@root/constants';
import { ChangeEvent, Component } from 'react';

interface ISearchProps {
  handleSetCurrentCurrency: (currency: string) => void;
}

interface ISearchState {
  inputValue: string;
}

export class Search extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState((state) => ({ ...state, inputValue: value }));
  };

  getListFilteredCurrencies = (value: string) => {
    const { handleSetCurrentCurrency } = this.props;

    return CurrenciesList.filter((currency) =>
      currency.toLowerCase().includes(value.trim().toLowerCase()),
    ).map((currency) => (
      <ElasticSearchItem key={currency} onClick={() => handleSetCurrentCurrency(currency)}>
        {currency}
      </ElasticSearchItem>
    ));
  };

  render() {
    const { inputValue } = this.state;
    const filteredCurrencies = this.getListFilteredCurrencies(inputValue);

    return (
      <SearchContainer>
        <SearchTitle>Search currency in the bank</SearchTitle>
        <SearchInputContainer>
          <SearchInput data-testid='bank-search' value={inputValue} onChange={this.handleOnChange} />
          <SearchImage />
        </SearchInputContainer>
        {inputValue.trim().length !== 0 ? (
          <ElasticSearchContainer data-testid='elastic-search'>
            {filteredCurrencies.length === 0 ? (
              <ElasticSearchItem>Not found</ElasticSearchItem>
            ) : (
              filteredCurrencies
            )}
          </ElasticSearchContainer>
        ) : null}
      </SearchContainer>
    );
  }
}
