import React from "react";

const PhotoItem: React.FC<PropTypes> = ({ photo }) => {
	return (
		<div>
			{photo && (
				<div className="photo-wrapper">
					<div className="image-wrapper">
						<img src={photo.media.m} alt="" />
					</div>
					<div className="photo-details-wrapper">
						<h2>{photo.title}</h2>
						<div className="photo-details">
							<p>{photo.author}</p>
							<p>{photo.date_taken}</p>
							<p>{photo.tags}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
type PropTypes = {
	photo?: IPhoto;
};
export default PhotoItem;
