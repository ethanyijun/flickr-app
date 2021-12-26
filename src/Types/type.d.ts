interface IPhoto {
	title: string;
	link: string;
	media: JsonObject;
	date_taken: string;
	description: string;
	published: string;
	author: string;
	author_id: string;
	tags: string;
}

type PhotoListState = {
	photos: IPhoto[];
};

type PhotosAction = {
	type: string;
	photos: IPhoto[];
};

type DispatchType = (args: string) => void;
