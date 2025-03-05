/**
 * @NApiVersion 2.x
 * @NScriptType Restlet
 */
define(['N/file'], function(file) {

    // Função para retornar o ID da pasta raiz
    function getRootFolder() {
        var rootFolder = file.getRootFolder();
        return { id: rootFolder.id };
    }

    // Função para retornar o conteúdo de uma pasta
    function getFolderContents(folderId) {
        var folder = file.load({ id: folderId });
        var contents = [];
        folder.getChildren().forEach(function(child) {
            contents.push({
                id: child.id,
                name: child.name,
                recordType: child.isFolder ? 'folder' : 'file'
            });
        });
        return { items: contents };
    }

    // Função para retornar o conteúdo de um arquivo
    function downloadFile(fileId) {
        var fileObj = file.load({ id: fileId });
        return fileObj.getContents();
    }

    // Função principal do Restlet
    function handleRequest(context) {
        if (context.action === 'root') {
            return getRootFolder();
        } else if (context.folder) {
            return getFolderContents(context.folder);
        } else if (context.id) {
            return downloadFile(context.id);
        } else {
            throw new Error('Parâmetros inválidos na requisição.');
        }
    }

    return {
        get: handleRequest
    };
});