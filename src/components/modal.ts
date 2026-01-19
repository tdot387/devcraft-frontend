import { renderDeleteModalTemplate } from "@/templates/modal.template";

export function renderDeleteModal(): string {
    const template = renderDeleteModalTemplate();
    return template;
}