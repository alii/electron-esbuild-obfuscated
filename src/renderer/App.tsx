import React, {useState} from 'react';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Counter</h1>
			<button
				type="button"
				onClick={() => {
					setCount(c => c + 1);
				}}
			>
				{count}
			</button>
		</>
	);
}
