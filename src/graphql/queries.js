import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
    query GetAllCharacters($query: CharacterFilterDto) {
        getAllCharacters(query: $query) {
            id
            name
            element
            region
            rarity
            skills {
                normal_attack
            }
            image
            banner_image
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
