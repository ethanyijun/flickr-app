import React from "react";

const PhotoItem: React.FC<PropTypes> = ({ photo }) => {
	return (
		<div>
			<h1>This is PhotoItem component</h1>
			<div>{photo?.title}</div>
		</div>
	);
};
type PropTypes = {
	photo?: IPhoto;
};
export default PhotoItem;
