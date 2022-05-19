export default function FormEdit(props) {
	const {
		handlerSubmit,
		
		setOldUserId,
		setOldTitle,
		setOldComment,

		oldUserId,
		oldTitle,
		oldComment,
	} = props;

	return (
		<form
			onSubmit={(event) => {
				handlerSubmit(event);
			}}
			className="Editor"
		>
			<label>
				User Id:
				<input
					name="userId"
					value={oldUserId}
					type="text"
					onChange={({ target }) => {
						setOldUserId(target.value)
					}}
					className="Editor__input"
				/>				
			</label>
			
			<label>
				Title:
				<input
					name="title"
					value={oldTitle}
					type="text" 
					onChange={({ target }) => {
						setOldTitle(target.value)
					}}
					className="Editor__input"
				/>				
			</label>
				
			<label>
				Comment:
				<textarea
					name="comment"
					value={oldComment}
					onChange={({ target }) => {
						setOldComment(target.value)
					}}
					className="Editor__input textarea"
				>
				</textarea>				
			</label>

			<button
				name="saveButton" 
				type="submit" 
				className="button edit"
			>
				Save changes
			</button>
		</form>  		
	);
}
