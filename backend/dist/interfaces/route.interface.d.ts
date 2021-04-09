interface Position {
    lat: string;
    long: string;
}
export default interface Route {
    title: string;
    startPosition: Position;
    endPosition: Position;
}
export {};
