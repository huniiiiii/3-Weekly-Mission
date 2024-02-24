export interface Folder {
    id: string;
    name: string;
}

export interface Link {
    id: string;
    url: string;
    title: string;
    description: string;
    imageSource?: string;
    created_at: string;
}
