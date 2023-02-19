"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nest_next_1 = require("nest-next");
const next_1 = __importDefault(require("next"));
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = (0, next_1.default)({
        dev: process.env.NODE_ENV !== 'production',
    });
    await app.prepare();
    const server = await core_1.NestFactory.create(app_module_1.AppModule);
    const renderer = server.get(nest_next_1.RenderModule);
    renderer.register(server, app);
    await server.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map