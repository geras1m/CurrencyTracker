import 'mapbox-gl/dist/mapbox-gl.css';

import { MapContainer } from '@components/BankCard/Map/styled';
import { IBankData } from '@root/types';
import mapboxgl from 'mapbox-gl';
import { createRef, PureComponent, RefObject } from 'react';

const { API_MAPBOX_GL_TOKEN } = process.env;

mapboxgl.accessToken = API_MAPBOX_GL_TOKEN!;

interface IMapBoxProps {
  banksDataList: IBankData[];
}

export class MapBox extends PureComponent<IMapBoxProps, object> {
  mapRef: RefObject<HTMLDivElement>;

  map: mapboxgl.Map | null;

  markers: mapboxgl.Marker[];

  constructor(props: IMapBoxProps) {
    super(props);
    this.mapRef = createRef();
    this.map = null;
    this.markers = [];
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapRef.current!,
      center: [30.330654, 53.894548],
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 12.2,
      attributionControl: false,
    });

    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, 'top-left');

    this.addMarks();
  }

  componentDidUpdate() {
    this.removeMarks();
    this.addMarks();
  }

  addMarks = () => {
    const { banksDataList } = this.props;

    banksDataList.forEach(({ name, latitude, longitude, currencies }) => {
      const mark = new mapboxgl.Marker({ pitchAlignment: 'auto' })
        .setLngLat([latitude, longitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${name}</h3><p>${currencies.join(', ')}</p>`))
        .addTo(this.map!);

      this.markers.push(mark);
    });
  };

  removeMarks = () => {
    this.markers.forEach((mark) => mark.remove());
  };

  render() {
    return <MapContainer data-testid='bank-map' ref={this.mapRef} />;
  }
}
