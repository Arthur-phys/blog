import type { PostObject } from "../interfaces/post";

export async function PostService(postSlugName: string): Promise<PostObject> {
    let response = await fetch(`/posts/${postSlugName}/${postSlugName}.json`)
    let postContent: PostObject = await response.json()
    return postContent
}

