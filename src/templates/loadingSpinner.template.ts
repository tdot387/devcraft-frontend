export function renderLoadingSpinnerTemplate(): string {
  return `
    <div class="w-100 text-center py-5">
      <div class="cooking-animation mb-3" style="font-size: 4rem; animation: cook 1s ease-in-out infinite;">
        🍳
      </div>
      <div class="loading-text text-success fw-bold" style="font-size: 1.2rem;">
        Lädt<span class="loading-dots"></span>
      </div>
    </div>
  `;
}
