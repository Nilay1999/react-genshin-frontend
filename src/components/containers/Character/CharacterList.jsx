import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../../../graphql/queries';
import './characterList.css';
import { Card } from 'antd';
import FilterComponent from './FilterComponent';
import { BANNER_LINK } from '../../../utils/constants';

const { Meta } = Card;

function CharacterList() {
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);
    const [banner, setBanner] = useState(BANNER_LINK);

    if (loading) return 'Loading ...';
    if (error) return <pre>{error.message}</pre>;

    return (
        <div className="content">
            <h2 style={{ fontWeight: 'bold' }}>CHARACTERS</h2>
            <div className="row ">
                <div className="col-3">
                    <FilterComponent />
                </div>
                <div className="col-6">
                    <div className="character-content">
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}>
                            {data.getAllCharacters.map((val, key) => {
                                return (
                                    <div className="character-card">
                                        <Card
                                            onClick={() => console.log(val.id)}
                                            hoverable
                                            onMouseEnter={() =>
                                                setBanner(val.banner_image)
                                            }
                                            key={key}
                                            style={{
                                                width: 130,
                                                marginBottom: '10px',
                                                cursor: 'pointer',
                                            }}
                                            loading={loading}>
                                            <Meta
                                                avatar={
                                                    <img
                                                        alt="example"
                                                        width="115"
                                                        height="115"
                                                        style={{
                                                            backgroundColor:
                                                                val.rarity === 5
                                                                    ? '#e1872280'
                                                                    : '#ae92d680',
                                                            borderRadius: '5px',
                                                        }}
                                                        src={val.image}
                                                    />
                                                }
                                            />
                                            <div
                                                style={{
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: '5px',
                                                    height: '60px',
                                                    fontWeight: 'normal',
                                                    color: 'white',
                                                }}>
                                                {val.name}
                                            </div>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div
                        className="preview-image"
                        style={{
                            backgroundImage: 'url(' + banner + ')',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}></div>
                </div>
            </div>
        </div>
    );
}

export default CharacterList;
