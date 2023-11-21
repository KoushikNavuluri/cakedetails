function User(props) {
    var name = props.name
    var email = props.email
    var level = props.level
    var designation = props.designation
    var location = props.location
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{level}</td>
            <td>{designation}</td>
            <td>{location}</td>
        </tr>
    )
}
export default User