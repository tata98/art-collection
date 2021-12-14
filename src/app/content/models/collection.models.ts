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
}
export interface ArtworkInfo{
  id: string;
  uid:string | null | undefined;
  review: string;
}
