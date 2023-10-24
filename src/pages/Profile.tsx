import { useParams, useNavigate } from "react-router-dom";

export default function Profile() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-green-300 flex justify-center items-center h-full flex-col">
      <h1 className="text-3xl font-bold">{name} Profile page</h1>
      <button
        className="bg-orange-300 p-2 rounded-md"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}
