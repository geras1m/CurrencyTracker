import { ChartMessage } from '@components/Timeline/ChartNotifyModal/styled';
import { observer } from '@root/observer';
import { Component } from 'react';
import { createPortal } from 'react-dom';

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
    observer.subscribe(this.handleOpenModal);
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
    observer.unsubscribe(this.handleCloseModal);
  }

  timeOut = () => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => this.handleCloseModal(), 4000);
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { currentCurrency } = this.props;

    if (!isOpen) return null;

    return createPortal(
      <ChartMessage>The chart was created successfully for {currentCurrency}!</ChartMessage>,
      document.getElementById('modal-root')!,
    );
  }
}
