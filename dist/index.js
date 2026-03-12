"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'template-curator-demo' });
});
app.get('/', (_req, res) => {
    res.json({ message: 'Hello from template-curator-demo!' });
});
app.listen(port, () => {
    console.log(`template-curator-demo listening on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map