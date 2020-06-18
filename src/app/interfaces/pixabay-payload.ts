import { PixabayHit } from './pixabay-hit';

export interface PixabayPayload {
    'total': number;
    'totalHits': number;
    'hits': PixabayHit[];
}
