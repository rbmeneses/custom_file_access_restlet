# custom_file_access_restlet
## Visão geral

Este script NetSuite 2.0 Restlet fornece acesso a arquivos e pastas dentro do sistema NetSuite. Ele permite recuperar o ID da pasta raiz, obter o conteúdo de uma pasta específica e baixar o conteúdo de um arquivo individual.

## Funcionalidade

O script expõe três funções principais acessíveis através de solicitações HTTP GET:

1.  **getRootFolder**: Retorna o ID da pasta raiz no NetSuite.
2.  **getFolderContents**: Retorna uma lista dos conteúdos (arquivos e subpastas) de uma pasta especificada.
3.  **downloadFile**: Retorna o conteúdo de um arquivo especificado.

## Endpoints

-   `https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/subsect_156509465078.html/custom_file_access_restlet?action=root`
    -   Retorna: Um objeto JSON com o ID da pasta raiz.
-   `https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/subsect_156509465078.html/custom_file_access_restlet?folder=[ID da pasta]`
    -   Retorna: Um objeto JSON com uma matriz de conteúdos da pasta.
-   `https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/subsect_156509465078.html/custom_file_access_restlet?id=[ID do arquivo]`
    -   Retorna: O conteúdo do arquivo.

## Dependências

-   Módulo NetSuite `N/file` para manipulação de arquivos e pastas.

## Implantação

1.  Implante este script como um Restlet no NetSuite.
2.  Anote a URL externa do Restlet implantado.
3.  Use a URL e os parâmetros de consulta apropriados para acessar as funções expostas.

## Uso

-   Use a ação `root` para obter o ID da pasta raiz.
-   Use o parâmetro `folder` com o ID da pasta para obter seus conteúdos.
-   Use o parâmetro `id` com o ID do arquivo para baixar o conteúdo do arquivo.

## Segurança

Certifique-se de que as permissões e funções apropriadas estejam configuradas no NetSuite para controlar o acesso a este Restlet e aos arquivos e pastas que ele expõe.
