export interface Image {
    path: string,
    text: string,
    scale: string,
}

export interface Section {
    title: string,
    text: string,
    image: Image,
}

export interface PostDetails {
    title: string,
    keywords: string[],
    sections: Section[],
}

export interface PostObject {
    slug: string,
    post: PostDetails
    previous: PostOverview,
    next: PostOverview
}

export interface PostOverview {
    slug: string,
    title: string,
}