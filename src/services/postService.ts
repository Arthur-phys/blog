import type { PostIndex, PostObject } from "../interfaces/post";

export async function PostService(postSlugName: string): Promise<PostObject> {
    let postContent: PostObject;
    try {
        const response = await fetch(`/posts/${postSlugName}/${postSlugName}.json`)
        postContent = await response.json();
    } catch (e) {
        const response = await fetch(`/posts/not-found/not-found.json`)
        postContent = await response.json();
    }
    return postContent
}

export async function LatestPostsService(): Promise<PostIndex> {
    const response = await fetch(`/posts/latest.json`);
    return await response.json();
}

export async function IndexService(): Promise<PostIndex> {
    const response = await fetch(`/posts/index.json`);
    return await response.json();
}