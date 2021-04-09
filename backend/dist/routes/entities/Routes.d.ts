export interface Routes {
    title: string;
    startPosition: IPosition;
    endPosition: IPosition;
}
interface IPosition {
    latitude: number;
    longitude: number;
}
export {};
