export function renderToastTemplate(message: string): string {
    return `
    <div class="toast-container position-fixed bottom-90 start-50 translate-middle-x p-3">
      <div id="myToast" class="toast align-items-center text-bg-success border-0" role="alert" data-bs-delay="5000" data-bs-autohide="true">
        <div class="d-flex">
          <div class="toast-body">
            ${message}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    </div>`
}