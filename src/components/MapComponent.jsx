import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in Leaflet + React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const donorIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const recipientIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const mockDonors = [
    { id: 1, name: "Banjara Hills Kitchen", lat: 17.4156, lng: 78.4347, type: "Food", quantity: "60 Meals" },
    { id: 2, name: "Secunderabad Community Center", lat: 17.4399, lng: 78.4983, type: "Clothes", quantity: "30 Packs" },
    { id: 3, name: "Madhapur Relief Hub", lat: 17.4483, lng: 78.3915, type: "Food", quantity: "150kg Rice" }
];

const mockRecipients = [
    { id: 4, name: "Charminar Area Orphanage", lat: 17.3616, lng: 78.4747, urgent: true },
    { id: 5, name: "Jubilee Hills Care Home", lat: 17.4299, lng: 78.4127, urgent: false }
];

function MapComponent({ onDonate }) {
    const [filter, setFilter] = useState('all'); // all, food, clothes
    const [showRecipients, setShowRecipients] = useState(true);

    const filteredDonors = mockDonors.filter(donor => {
        if (filter === 'all') return true;
        return donor.type.toLowerCase() === filter.toLowerCase();
    });

    return (
        <div style={{ height: '100%', position: 'relative' }}>
            <div className="map-filters" style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="glass" style={{ padding: '8px', borderRadius: '12px', display: 'flex', gap: '5px' }}>
                    <button
                        className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '5px 12px', fontSize: '0.8rem', borderRadius: '8px' }}
                        onClick={() => setFilter('all')}
                    >All</button>
                    <button
                        className={`btn ${filter === 'food' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '5px 12px', fontSize: '0.8rem', borderRadius: '8px' }}
                        onClick={() => setFilter('food')}
                    >Food</button>
                    <button
                        className={`btn ${filter === 'clothes' ? 'btn-primary' : 'btn-outline'}`}
                        style={{ padding: '5px 12px', fontSize: '0.8rem', borderRadius: '8px' }}
                        onClick={() => setFilter('clothes')}
                    >Clothes</button>
                </div>
                <div className="glass" style={{ padding: '8px', borderRadius: '12px' }}>
                    <label style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                        <input
                            type="checkbox"
                            checked={showRecipients}
                            onChange={() => setShowRecipients(!showRecipients)}
                            style={{ width: 'auto', accentColor: 'var(--accent-primary)' }}
                        />
                        Show Recipients
                    </label>
                </div>
            </div>

            <MapContainer center={[17.3850, 78.4867]} zoom={12} scrollWheelZoom={false} style={{ height: "100%", width: "100%", borderRadius: '20px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    style={{ filter: 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                />
                {filteredDonors.map(donor => (
                    <Marker key={donor.id} position={[donor.lat, donor.lng]} icon={donorIcon}>
                        <Popup>
                            <div style={{ padding: '5px' }}>
                                <h4 style={{ color: '#2ecc71', margin: '0 0 5px' }}>{donor.name} (Donor)</h4>
                                <p style={{ margin: '0', fontSize: '13px' }}><strong>Type:</strong> {donor.type}</p>
                                <p style={{ margin: '0', fontSize: '13px' }}><strong>Availability:</strong> {donor.quantity}</p>
                                <button className="btn btn-primary" onClick={onDonate} style={{ padding: '5px 10px', fontSize: '11px', marginTop: '10px', width: '100%' }}>Request Pickup</button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                {showRecipients && mockRecipients.map(recipient => (
                    <Marker key={recipient.id} position={[recipient.lat, recipient.lng]} icon={recipientIcon}>
                        <Popup>
                            <div style={{ padding: '5px' }}>
                                <h4 style={{ color: '#f1c40f', margin: '0 0 5px' }}>{recipient.name} (Recipient)</h4>
                                <p style={{ margin: '0', fontSize: '13px' }}><strong>Status:</strong> {recipient.urgent ? '🚨 Urgent Need' : 'Waiting'}</p>
                                <button className="btn btn-outline" onClick={onDonate} style={{ padding: '5px 10px', fontSize: '11px', marginTop: '10px', width: '100%', borderColor: '#f1c40f', color: '#f1c40f' }}>Donate Now</button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default MapComponent;
