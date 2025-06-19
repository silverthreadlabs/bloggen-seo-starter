export type BlogMetadata = {
    title: string;
    // author:string;
    publishedAt: string;
    summary: string;
    image?: string;
};

export type ProductMetadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    version?: string;
    lastUpdated?: string;
    category?: string;
    link?: string;
};
