export interface Artworks {
  total: number;
  objectIDs: number[];
}

export interface Artwork {
  title: string;
  period: string;
  artistDisplayName: string;
  medium: string;
  primaryImage: string;
  department: string;
}
