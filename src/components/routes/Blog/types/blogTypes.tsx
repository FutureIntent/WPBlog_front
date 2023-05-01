export enum OrderBy {
    author = 'author',
    date = 'date',
    id = 'id',
    include = 'include',
    modified = 'modified',
    parent = 'parent',
    relevance = 'relevance',
    slug = 'slug',
    include_slugs = 'include_slugs',
    title = 'title'
}

export enum Order {
    asc = 'asc',
    desc = 'desc'
}

export interface FetchPostsInterface {
    orderBy?: OrderBy,
    order?: Order,
    categories?: string,
    offset?: number,
    limit?: number
}