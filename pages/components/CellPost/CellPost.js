export default function CellPost(props) {
	const {
		userId,
		id,
		title,
		body,

		deletePost,
		handlerEdit,
	} = props;

	return (
		<tr key={id} className="Posts__line">
			<td className="Posts__cell">
				{userId}
			</td>
			<td className="Posts__cell">
				{title}
			</td>
			<td className="Posts__cell">
				{body}
			</td>
			<td className="Posts__cell">
				<button
					onClick={() => deletePost(id)}
					className="button delete"
				>
					X
				</button>
			</td>
			<td className="Posts__cell">
				<button
					onClick={() => handlerEdit(
						id,
						userId,
						title,
						body,
					)}
					className="button edit"
				>
					Edit
				</button>
			</td>
		</tr>
	);
}