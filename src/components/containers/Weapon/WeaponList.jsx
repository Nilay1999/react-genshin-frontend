import { useQuery } from '@apollo/client';
import '../Character/characterList.css';
import { GET_ALL_WEAPONS } from '../../../graphql/queries';

function WeaponList() {
    const { data, loading, error } = useQuery(GET_ALL_WEAPONS);

    console.log(data);
    if (loading) return 'Loading...';
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
                    {data.getAllWeapon.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.weapon_type}</td>
                                <td>{val.location}</td>
                                <td>{val.rarity}</td>
                                <td>{val.passive}</td>
                                <td>
                                    <img
                                        src={val.image}
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                        }}
                                        alt="weapon"
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

export default WeaponList;
