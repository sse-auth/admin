import { useNavigate } from "react-router-dom"

const navigate = useNavigate();

export const goBack = () => {
    navigate(-1);
}