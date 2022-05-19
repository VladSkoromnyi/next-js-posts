import CellPost from "../CellPost/CellPost";

export default function TablePost(props) {

	const {
		posts,
		deletePost,
		handlerEdit,
	} = props;

	return (
		<table className="Posts">
			<thead className="Posts__thead">
				<tr className="Posts__thead-line">
					<td className="Posts__thead-cell">
						User:
					</td>
					<td className="Posts__thead-cell">
						Title:
					</td>
					<td className="Posts__thead-cell">
						Comment:
					</td>
					<td className="Posts__thead-cell">
						Delete:
					</td>
					<td className="Posts__thead-cell">
						Change:
					</td>
				</tr>
			</thead>
			{
				posts && posts.map(({ 
					userId,
					id,
					title,
					body,
				}) => (
					<CellPost 
						userId={userId}
						id={id}
						title={title}
						body={body}

						deletePost={deletePost}
						handlerEdit={handlerEdit}
					/>
				))
			}
		</table>	
		
	);
}