export interface Doc {
    author_key: string[];
    author_name: string[];
    cover_edition_key: string;
    cover_i: number;
    ebook_access: string;
    edition_count: number;
    first_publish_year: number;
    has_fulltext: boolean;
    ia: string[];
    ia_collection_s: string;
    id_standard_ebooks?: string[];
    key: string;
    language: string[];
    lending_edition_s?: string;
    lending_identifier_s: string;
    public_scan_b: boolean;
    title: string;
}

/**
 * Interfaccia response della chiamta di ricerca
 */
export interface OpenLibraryResponse {
    docs: Doc[];
    documentation_url: string;
    numFound: number;
    numFoundExact: boolean;
    num_found: number;
    offset: number | null;
    q: string;
    start: number;
}

/**
 * Interfaccia responde della chiamata per recuperare l'oggetto del lavoro
 */
export interface OpenLibraryWork {
    key: string;
    title: string;
    description?: string | { value: string };
    covers?: number[];
    subjects?: string[];
    authors: {
        author: { key: string };
    }[];
}

/**
 * Interfaccia response chiamata autori
 */
export interface OpenLibraryAuthor {
    key: string;
    name: string;
    bio?: string | { value: string };
}

export interface OpenLibraryEditionsResponse {
    entries: OpenLibraryEdition[];
    links: {
        self: string;
        work: string;
        next?: string;
        prev?: string;
    };
    size: number;
}

/**
 * Interfaccia response chiamata edizioni
 */
export interface OpenLibraryEdition {
    identifiers?: {
        goodreads?: string[];
        librarything?: string[];
        [key: string]: string[] | undefined;
    };
    title: string;
    description?: string | { value: string };
    authors?: { key: string }[];
    publish_date?: string;
    publishers?: string[];
    covers?: number[];
    contributions?: string[];
    languages?: { key: string }[];
    source_records?: string[];
    local_id?: string[];
    type: { key: string };
    first_sentence?: {
        type: string;
        value: string;
    };
    key: string;
    number_of_pages?: number;
    works?: { key: string }[];
    classifications?: Record<string, unknown>;
    ocaid?: string;
    isbn_10?: string[];
    isbn_13?: string[];
    latest_revision?: number;
    revision?: number;
    created?: {
        type: string;
        value: string;
    };
    last_modified?: {
        type: string;
        value: string;
    };
}
