import {
  CurrencyMenuWrapper,
  MenuCurrencyItem,
  MenuCurrencyList,
  MenuSelectedCurrency,
} from '@components/CurrencySelector/styled';
import { CurrenciesList } from '@root/constants';
import { PureComponent } from 'react';

interface ICurrencySelectorState {
  isOpenList: boolean;
}

interface ICurrencySelectorProps {
  currency: string;
  setCurrency: (newCurrency: string) => void;
}

export class CurrencySelector extends PureComponent<ICurrencySelectorProps, ICurrencySelectorState> {
  constructor(props: ICurrencySelectorProps) {
    super(props);
    this.state = {
      isOpenList: false,
    };
  }

  handleOpenList = () => {
    this.setState((state) => ({ ...state, isOpenList: !state.isOpenList }));
  };

  handleCloseList = (newCurrency: string) => {
    this.setState((state) => ({ ...state, isOpenList: !state.isOpenList }));

    const { setCurrency } = this.props;
    setCurrency(newCurrency);
  };

  render() {
    const { isOpenList } = this.state;
    const { currency } = this.props;

    return (
      <CurrencyMenuWrapper>
        <MenuSelectedCurrency onClick={this.handleOpenList}>{currency}</MenuSelectedCurrency>
        <MenuCurrencyList>
          {isOpenList &&
            CurrenciesList.filter((currencyItem) => currency !== currencyItem).map((currencyItem) => {
              return (
                <MenuCurrencyItem key={currencyItem} onClick={() => this.handleCloseList(currencyItem)}>
                  {currencyItem}
                </MenuCurrencyItem>
              );
            })}
        </MenuCurrencyList>
      </CurrencyMenuWrapper>
    );
  }
}
