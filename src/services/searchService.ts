import type { ReverseIndex } from "../interfaces/postIndex";

export function SearchService(query: string, maxReturn: number, reverseIndex: ReverseIndex) {
    const splitQuery = query.trim().split(" ");
    let queryPosts: Array<[string,number]> = []
    splitQuery.forEach(wordQuery => {
        (reverseIndex[wordQuery] ?? []).forEach(
            postSlug => {
                queryPosts = binaryInsert(postSlug,queryPosts,0,queryPosts.length)
            }
        )
    })
    queryPosts = queryPosts.sort((x,y) => x[1] - y[1])
    return maxReturn > queryPosts.length - 1 ? queryPosts : queryPosts.slice(0,maxReturn)
}

function binaryInsert(element: string, posts: Array<[string,number]>, left: number, right: number): Array<[string,number]> {
    let middle = Math.floor((right - left) / 2)

    if (middle == 0) {
        return [...posts.slice(0,middle),[element,1],...posts.slice(middle,posts.length)]
    }
    
    if (element > posts[middle][0]) {
        return binaryInsert(element,posts,middle,right)
    } else if (element < posts[middle][0]) {
        return binaryInsert(element,posts,left,middle)
    } else {
        return [...posts.slice(0,middle),[element,posts[middle][1] + 1],...posts.slice(middle,posts.length)]
    }

}