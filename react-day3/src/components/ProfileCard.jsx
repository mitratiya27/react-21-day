export default function ProfileCard({ name, age, profession, city }) {
    return(
        <>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Profession: {profession}</p>
        <p>City: {city}</p>
        </>
    );
}