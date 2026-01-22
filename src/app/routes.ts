import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("bodas","routes/bodas.tsx"),
    route("eventos_corporativos","routes/eventos_corporativos.tsx"),
    route("marketing_emocional","routes/marketing_emocional.tsx"),
    route("activacion_btl","routes/activacion_btl.tsx"),
] satisfies RouteConfig;
