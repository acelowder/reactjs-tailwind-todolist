export default function TodoTask({ todo }) {
	return (
		<li className="flex justify-between items-center px-2 py-1">{todo}</li>
	);
}
