import type { LinkedPostsDir } from "../interfaces/post";

export async function GetLinkedPosts(): Promise<LinkedPostsDir> {
    const response = await fetch(`/posts/linked.json`)
    return await response.json();
}