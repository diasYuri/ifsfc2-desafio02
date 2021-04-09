import { RoutesService } from './routes.service';
export declare class RoutesController {
    private readonly routesService;
    constructor(routesService: RoutesService);
    findAll(): Promise<import("./entities/Routes").Routes>;
}
