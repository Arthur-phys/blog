import type { LinkedPosts } from "../interfaces/post";

export async function GetLinkedPosts(postSlug: string): Promise<LinkedPosts> {
    const response = await fetch(`/posts/${postSlug}/linked.json`)
    return await response.json();
}