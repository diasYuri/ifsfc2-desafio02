"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path = require("path");
const { readFile } = fs_1.promises;
let RoutesService = class RoutesService {
    async readRoutes() {
        const data = JSON.parse(await readFile(path.join(__dirname, '../../Destinations/routes.json'), 'utf8'));
        const routes = data.routes.map(r => {
            const route = {
                title: r.title,
                startPosition: {
                    latitude: r.startPosition.lat,
                    longitude: r.startPosition.lng,
                },
                endPosition: {
                    latitude: r.startPosition.lat,
                    longitude: r.startPosition.lng,
                }
            };
            return route;
        });
        return routes;
    }
    findAll() {
        return this.readRoutes();
    }
};
RoutesService = __decorate([
    common_1.Injectable()
], RoutesService);
exports.RoutesService = RoutesService;
//# sourceMappingURL=routes.service.js.map