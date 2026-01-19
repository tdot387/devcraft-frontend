export function renderDeleteModalTemplate(): string {
    return `
    <div class="modal fade" id="deleteRecipeModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Rezept löschen?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    Möchten Sie das ausgewählte Rezept wirklich löschen?<br /> Achtung: Diese Aktion kann nicht rückgängig gemacht werden.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" id="delete-recipe">Rezept löschen</button>
                </div>
            </div>
        </div>
    </div>`
}