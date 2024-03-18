import { Portal } from '@components/Portal';
import { ChartMessage } from '@components/Timeline/ChartNotifyModal/styled';
import { observer } from '@root/observer';
import { Component } from 'react';

interface IChartNotifyModalState {
  isOpen: boolean;
}

interface IChartNotifyModalProps {
  currentCurrency: string;
}

export class ChartNotifyModal extends Component<IChartNotifyModalProps, IChartNotifyModalState> {
  timer: NodeJS.Timeout | null = null;

  constructor(props: IChartNotifyModalProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    observer.subscribe(this.handleSetOpenModal);
  }

  componentDidUpdate(
    prevProps: Readonly<IChartNotifyModalProps>,
    prevState: Readonly<IChartNotifyModalState>,
  ) {
    const { isOpen } = this.state;
    const { currentCurrency } = this.props;

    if (prevState.isOpen !== isOpen && prevProps.currentCurrency === currentCurrency) {
      this.timeOut();
    }
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
    observer.unsubscribe(this.handleSetOpenModal);
  }

  timeOut = () => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => this.handleSetOpenModal(false), 4000);
  };

  handleSetOpenModal = (value: boolean) => {
    this.setState({ isOpen: value });
  };

  render() {
    const { isOpen } = this.state;
    const { currentCurrency } = this.props;

    if (!isOpen) return null;

    return (
      <Portal>
        <ChartMessage data-testid='timeline-notify-modal'>
          The chart was created successfully for {currentCurrency}!
        </ChartMessage>
      </Portal>
    );
  }
}
