import React, {useEffect} from "react";
import {Button} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/slices/cartSlice";
import {getAllPosts} from "../../store/slices/postSlice";
import PostCard from "../../components/PostCard/PostCard";
import {Post} from "../../models/post";
function Posts() {
	const dispatch = useDispatch();

	const postState = useSelector((state: any) => state.post);
	console.log(postState);
	useEffect(() => {
		dispatch(getAllPosts() as any);
	}, []);

	return (
		<div>
			Posts
			{postState.posts.map((post: Post) => (
				<PostCard post={post} />
			))}
		</div>
	);
}

export default Posts;
