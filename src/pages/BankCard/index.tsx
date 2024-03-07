import { Container } from '@components/App/styled';
import { MapBox } from '@components/BankCard/Map';
import { Search } from '@components/BankCard/Search';
import { LastUpdateTime } from '@components/LastUpdateTime';
import { banksList } from '@constants/banksCard';
import { IBankData } from '@root/types';
import { getTimeFromLocalstorage } from '@utils/time';
import { Component } from 'react';

interface IBankCardState {
  currentCurrency: [] | IBankData[];
}

class BankCard extends Component<object, IBankCardState> {
  constructor(props: object) {
    super(props);
    this.state = {
      currentCurrency: banksList,
    };
  }

  handleSetCurrentCurrency = (currency: string) => {
    const sortedBanks = banksList.filter(({ currencies }) => {
      return currencies.includes(currency);
    });

    this.setState((state) => ({
      ...state,
      currentCurrency: sortedBanks,
    }));
  };

  render() {
    const { currentCurrency } = this.state;
    const parsedTime = getTimeFromLocalstorage();

    return (
      <Container>
        <LastUpdateTime time={parsedTime} />
        <Search handleSetCurrentCurrency={this.handleSetCurrentCurrency} />
        <MapBox banksDataList={currentCurrency} />
      </Container>
    );
  }
}

export default BankCard;
