export interface PostIndexView {
    slug: string,
    title: string,
    lastModified: string
}

export type PostIndex = Array<PostIndexView>;