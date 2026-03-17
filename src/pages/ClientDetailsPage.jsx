import { useParams } from "react-router-dom";

export default function ClientDetailsPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>Client Details</h1>
            <p>Client ID: {id}</p>
        </div>
    ); 
}