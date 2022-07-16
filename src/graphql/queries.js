import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
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

export const GET_ALL_WEAPONS = gql`
    query {
        getAllWeapon {
            id
            name
            weapon_type
            location
            rarity
            passive
            image
        }
    }
`;
