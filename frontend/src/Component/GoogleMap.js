import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';


const containerStyle = {
    // position: 'absolute',
    width: '85.5%',
    height: '85%'
}

const initCenter = {
    lat: 40.7128,
    lng: -74.0060
}

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        selectedName: '',
        selectedWeather: '',
        selectedTemperature: '',
        selectedPopulation: '',
        showingInfoWindow: false,
        centerLat: 40.7128,
        centerLng: -74.0060,
        zoom: 7,
        activeMarker: {},
        markers: []
    }

    componentDidMount() {
        console.log(process.env.MONGODB)
        return fetch('/location',
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ markers: data })
                console.log(this.state.markers)
            })
            .catch(err => console.log(err))
    }

    onMarkerClick = (marker, extra) => {

        this.setState({
            centerLat: extra.lat,
            centerLng: extra.lng,
            selectedName: extra.name,
            selectedWeather: extra.weather,
            selectedTemperature: extra.temperature,
            selectedPopulation: extra.population,
            activeMarker: marker,
            showingInfoWindow: true,
            zoom: 11
        })
        console.log(this.state)
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                zoom: 7,
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        const Markers = this.state.markers.map((mk) => <Marker onClick={(a, marker, b) => this.onMarkerClick(marker, mk)} name={mk.name} position={{ lat: mk.lat, lng: mk.lng }} />)
        return (
            <Map google={this.props.google}
                onClick={this.onMapClicked}
                initialCenter={{
                    lat: initCenter.lat,
                    lng: initCenter.lng
                }}
                center={{
                    lat: this.state.centerLat,
                    lng: this.state.centerLng
                }}
                style={containerStyle}
                zoom={this.state.zoom}>

                {Markers}

                <InfoWindow onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
                    <div style={{ flexDirection: 'column', borderWidth: 1 }}>
                        <h1>{this.state.selectedName}</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center' }}>
                            <h2>{`Weather:  `}</h2>
                            {this.state.selectedWeather == 'sunny' &&
                                <WbSunnyIcon color='error' style={{ marginLeft: 10, marginTop: 14 }} />

                            }
                            {this.state.selectedWeather != 'sunny' &&
                                <CloudIcon color='primary' style={{ marginLeft: 10, marginTop: 14 }} />
                            }
                        </div>
                        <h2>{`Temperature: ${this.state.selectedTemperature}`}</h2>
                        <h2>{`Population: ${this.state.selectedPopulation}`}</h2>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCwvvM5mFlpGOgO5Dzw5KduP77yBPoD40E'
})(MapContainer)
