export interface Artworks {
  total: number;
  objectIDs: number[];
}

export interface Artwork {
  objectID:string;
  title: string;
  period: string;
  artistDisplayName: string;
  medium: string;
  primaryImage: string;
  department: string;
  culture: string;
  artistNationality: string;
  artistDisplayBio: string;
}
export type ArtworkInfoWithId = ArtworkInfo & {id: string}

export interface ArtworkInfo{
  objectId: string;
  uid:string | null | undefined;
  review: string;
}

export interface collectionListItem{
  data: ArtworkInfoWithId;
  artwork: Artwork;
}

export const FORM_RESET_EVENT_KEY = 'FORM_RESET';