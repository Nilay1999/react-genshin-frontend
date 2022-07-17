import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../../../graphql/queries';
import './characterList.css';
import { Avatar, Card, Skeleton, Switch } from 'antd';

const { Meta } = Card;

function CharacterList() {
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);
    const [banner, setBanner] = useState(
        'https://nest-genshin-images.s3.ap-south-1.amazonaws.com/714285876031a4f2cf5c3d6a45ee3370'
    );

    if (loading) return 'Loading ...';
    if (error) return <pre>{error.message}</pre>;

    return (
        <div className="content">
            <div className="row ">
                <div className="col-3">
                    <div className="filter-menu">
                        <input
                            className="serach"
                            placeholder="Filter by Name"
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div className="character-content">
                        <div className="row">
                            {data.getAllCharacters.map((val, key) => {
                                return (
                                    <div className="col-sm-3 character-card">
                                        <Card
                                            onClick={() => console.log(val.id)}
                                            hoverable
                                            onMouseEnter={() =>
                                                setBanner(val.banner_image)
                                            }
                                            key={key}
                                            style={{
                                                width: 150,
                                                marginBottom: '10px',
                                            }}
                                            loading={loading}>
                                            <Meta
                                                avatar={
                                                    <img
                                                        alt="example"
                                                        width="115"
                                                        height="115"
                                                        style={{
                                                            marginBottom:
                                                                '10px',
                                                            backgroundColor:
                                                                val.rarity === 5
                                                                    ? '#e1872280'
                                                                    : '#ae92d680',
                                                            borderRadius: '5px',
                                                        }}
                                                        src={val.image}
                                                    />
                                                }
                                                title={val.name}
                                            />
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
