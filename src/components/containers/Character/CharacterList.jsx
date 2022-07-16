import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../../../graphql/queries';
import './characterList.css';
import { Avatar, Card, Skeleton, Switch } from 'antd';

const { Meta } = Card;

function CharacterList() {
    const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);
    const [loader, setLoader] = useState(true);
    if (loading) return 'Loading...';
    if (error) return <pre>{error.message}</pre>;

    return (
        <div className="content">
            <div className="row ">
                <div className="col-3">
                    <div className="filter-menu">
                        <input />
                    </div>
                </div>
                <div className="col-6">
                    <div className="character-content">
                        <div className="row">
                            {data.getAllCharacters.map((val, key) => {
                                return (
                                    <div className="col-sm-3 character-card">
                                        <Card
                                            key={key}
                                            hoverable
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
                                                                val.rarity == 5
                                                                    ? '#cf3f3f9a'
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

                        {/* <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>element</th>
                        <th>region</th>
                        <th>rarity</th>
                        <th>normal attack</th>
                        <th>image</th>
                    </tr>
                    {data.getAllCharacters.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.element}</td>
                                <td>{val.region}</td>
                                <td>{val.rarity}</td>
                                <td>{val.skills.normal_attack}</td>
                                <td>
                                    <img
                                        src={val.image}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                        }}
                                        alt="character"
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </table> */}
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default CharacterList;
