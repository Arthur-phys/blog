export interface Section {
    title: string,
    text: string,
    image: string,
}

export interface PostDetails {
    title: string,
    sections: Section[],
}

export interface PostObject {
    slug: string,
    post: PostDetails
}