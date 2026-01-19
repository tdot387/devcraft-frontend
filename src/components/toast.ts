import { renderToastTemplate } from "@/templates/toast.template";

export function renderToast(message: string): string {
    const template = renderToastTemplate(message);
    return template;
}