import React from 'react';
import { Button, Tooltip, Typography } from 'antd';
import {
    ANEMO,
    CRYO,
    DENDRO,
    ELECTRO,
    GEO,
    HYDRO,
    PYRO,
} from '../../../utils/constants';
import './characterList.css';

function FilterComponent() {
    return (
        <div className="filter-menu">
            <input className="search" placeholder="Filter by Name" />
            <div style={{ width: 200, margin: '20px auto' }}>
                <h4 style={{ textAlign: 'center' }}>ELEMENTS</h4>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'left',
                    }}>
                    <Button className="element-button" onClick={{}}>
                        <img src={ANEMO} height="30" alt="element" />
                    </Button>
                    <Button className="element-button" onClick={{}}>
                        <img src={PYRO} height="30" alt="element" />
                    </Button>
                    <Button className="element-button" onClick={{}}>
                        <img src={CRYO} height="30" alt="element" />
                    </Button>
                    <Button className="element-button" onClick={{}}>
                        <img src={GEO} height="30" alt="element" />
                    </Button>
                    <Button className="element-button" onClick={{}}>
                        <img src={HYDRO} height="30" alt="element" />
                    </Button>
                    <Button className="element-button" onClick={{}}>
                        <img src={ELECTRO} height="30" alt="element" />
                    </Button>
                    <Button className="element-button" onClick={{}}>
                        <img src={DENDRO} height="30" alt="element" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FilterComponent;
