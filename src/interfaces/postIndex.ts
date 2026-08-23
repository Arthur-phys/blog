export interface PostIndexView {
    slug: string,
    title: string,
    lastModified: string
}

export interface ReverseIndex {
    [key: string]: string[]
}

export type PostIndex = Array<PostIndexView>;