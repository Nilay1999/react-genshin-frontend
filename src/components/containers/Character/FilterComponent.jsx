import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {
    ANEMO,
    CRYO,
    DENDRO,
    ELECTRO,
    GEO,
    HYDRO,
    PYRO,
    SWORD,
    POLEARM,
    CLAYMORE,
    CATALYST,
    BOW,
} from '../../../utils/constants';
import './characterList.css';

function FilterComponent() {
    const elements = {
        Anemo: ANEMO,
        Cryo: CRYO,
        Dendro: DENDRO,
        Electro: ELECTRO,
        Geo: GEO,
        Hydro: HYDRO,
        Pyro: PYRO,
    };

    const weapons = {
        Sword: SWORD,
        Polearm: POLEARM,
        Claymore: CLAYMORE,
        Catalyst: CATALYST,
        Bow: BOW,
    };

    const gender = ['Male', 'Female'];

    const bodyType = ['Boy', 'Tall Male', 'Tall Female', 'Girl', 'Small girl'];

    return (
        <div className="filter-menu">
            <input className="search" placeholder="Filter by Name" />
            <div style={{ width: 210, margin: '20px auto' }}>
                <h5 style={{ textAlign: 'center' }}>ELEMENTS</h5>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'left',
                    }}>
                    {Object.keys(elements).map((key, index) => {
                        return (
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="button-tooltip">{key}</Tooltip>
                                }>
                                <button className="element-button" onClick={{}}>
                                    <img
                                        src={elements[key]}
                                        height="30"
                                        alt="element"
                                    />
                                </button>
                            </OverlayTrigger>
                        );
                    })}
                </div>
            </div>
            <div style={{ width: 200, margin: '20px auto' }}>
                <h5 style={{ textAlign: 'center' }}>WEAPON TYPES</h5>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'left',
                    }}>
                    {Object.keys(weapons).map((key, index) => {
                        return (
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="button-tooltip">{key}</Tooltip>
                                }>
                                <button className="element-button" onClick={{}}>
                                    <img
                                        src={weapons[key]}
                                        height="30"
                                        alt="element"
                                    />
                                </button>
                            </OverlayTrigger>
                        );
                    })}
                </div>
            </div>
            <div style={{ width: 200, margin: '20px auto' }}>
                <h5 style={{ textAlign: 'center' }}>GENDER</h5>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'left',
                    }}>
                    {gender.map((value, key) => {
                        return (
                            <button
                                className="element-button"
                                key={key}
                                onClick={{}}>
                                {value}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div style={{ width: 200, margin: '20px auto' }}>
                <h5 style={{ textAlign: 'center' }}>BODY TYPE</h5>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'left',
                    }}>
                    {bodyType.map((value, key) => {
                        return (
                            <button
                                className="element-button"
                                key={key}
                                onClick={{}}>
                                {value}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div style={{ width: 200, margin: '20px auto' }}>
                <h5 style={{ textAlign: 'center' }}>RARITY</h5>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'left',
                    }}>
                    <button className="element-button" onClick={{}}>
                        4 Star
                    </button>
                    <button className="element-button" onClick={{}}>
                        5 Star
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterComponent;
