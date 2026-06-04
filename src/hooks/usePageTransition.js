import { useNavigate } from "react-router-dom";

export default function usePageTransition(setTransition) {
	const navigate = useNavigate();
	return (path) => {
		setTransition(true);
		setTimeout(() => {
			navigate(path);
			setTimeout(() => {
				setTransition(false);
			}, 500);
		}, 500);
	};
}
