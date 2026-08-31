import type { PostIndex, ReverseIndex } from "../interfaces/postIndex"
import type { PostObject } from "../interfaces/post";

export async function PostService(postSlugName: string): Promise<PostObject> {
    let postContent: PostObject;
    try {
        const response = await fetch(`/posts/${postSlugName}/${postSlugName}.json`)
        postContent = await response.json();
    } catch (e) {
        const response = await fetch(`/others/not-found/not-found.json`)
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

export async function ReverseIndexService(): Promise<ReverseIndex> {
    const response = await fetch(`/posts/reverse_index.json`);
    return await response.json();
}

export async function SlugEntryMapService(): Promise<{[key: string]: string}> {
    const response = await fetch(`/posts/slug_entry_map.json`);
    return await response.json();
}