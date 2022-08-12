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
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Anemo</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={ANEMO} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Pyro</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={PYRO} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Cryo</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={CRYO} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Geo</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={GEO} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Hydro</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={HYDRO} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="button-tooltip">Electro</Tooltip>
                        }>
                        <button className="element-button" onClick={{}}>
                            <img src={ELECTRO} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Dendro</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={DENDRO} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
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
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Sword</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={SWORD} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip">Bow</Tooltip>}>
                        <button className="element-button" onClick={{}}>
                            <img src={BOW} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="button-tooltip">Catalyst</Tooltip>
                        }>
                        <button className="element-button" onClick={{}}>
                            <img src={CATALYST} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="button-tooltip">Claymore</Tooltip>
                        }>
                        <button className="element-button" onClick={{}}>
                            <img src={CLAYMORE} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="button-tooltip">Polearm</Tooltip>
                        }>
                        <button className="element-button" onClick={{}}>
                            <img src={POLEARM} height="30" alt="element" />
                        </button>
                    </OverlayTrigger>
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
                    <button className="element-button" onClick={{}}>
                        Male
                    </button>
                    <button className="element-button" onClick={{}}>
                        Female
                    </button>
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
                    <button className="element-button" onClick={{}}>
                        Boy
                    </button>
                    <button className="element-button" onClick={{}}>
                        Tall Male
                    </button>
                    <button className="element-button" onClick={{}}>
                        Tall Female
                    </button>
                    <button className="element-button" onClick={{}}>
                        Girl
                    </button>
                    <button className="element-button" onClick={{}}>
                        Small Girl
                    </button>
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
