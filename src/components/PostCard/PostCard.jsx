import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";

function PostCard(props) {
	return (
		<Card>
			<Card.Content>
				<Card.Header>{props.post.title}</Card.Header>
				<Card.Meta>
					<span className="date">User ID: {props.post.userId}</span>
				</Card.Meta>
				<Card.Description>{props.post.body}</Card.Description>
			</Card.Content>
		</Card>
	);
}

export default PostCard;
