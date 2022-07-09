import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./characterList.css";

const FILMS_QUERY = gql`
    query {
        getAllCharacters {
            id
            name
            element
            region
            rarity
            skills {
                normal_attack
            }
            image
        }
    }
`;

function CharacterList() {
    const [characterList, setCharacterList] = useState();
    const { data, loading, error } = useQuery(FILMS_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;

    return (
        <div className="content">
            <div className="sub-content">
                <table>
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
                                            width: "50px",
                                            height: "50px",
                                        }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}

export default CharacterList;
