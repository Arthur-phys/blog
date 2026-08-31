import type { ReverseIndex } from "../interfaces/postIndex";

export function SearchService(query: string, maxReturn: number, reverseIndex: ReverseIndex) {
    const splitQuery = Array.from(new Set(query.toLowerCase().trim().split(" ")));
    let queryPosts: Array<[string,number]> = []
    splitQuery.forEach(wordQuery => {
        (reverseIndex[wordQuery] ?? []).forEach(
            postSlug => {
                if (queryPosts.length == 0) {
                    queryPosts.push([postSlug,1])
                    return;
                }
                binaryInsert(postSlug,queryPosts,0,queryPosts.length-1)
            }
        )
    })
    queryPosts = maxReturn > queryPosts.length - 1 ? queryPosts : queryPosts.slice(0,maxReturn);
    return queryPosts;
}

function binaryInsert(element: string, posts: Array<[string,number]>, left: number, right: number) {
    let middle = left + Math.floor((right - left) / 2)

    if (right - left < 0) {
        posts.splice(left,0,[element, 1])
    } else if (element == posts[middle][0]) {
        posts[middle] = [element,posts[middle][1] + 1]
    } else if (element > posts[middle][0]) {
        binaryInsert(element,posts,middle + 1,right)
    } else if (element < posts[middle][0]) {
        binaryInsert(element,posts,left,middle - 1)
    }
    return;
}