// ==========================================
// CONFIGURAÇÃO DE CERTIFICADOS E CRLS
// ==========================================
// Instruções:
// Cole o texto puro (formato PEM) entre as crases (` `).
// O site cuidará de transformar isso em arquivos .crt, .pem e .crl para download.

const pkiData = {
    certificates: {
        // --- CADEIA INTERNA ---
        internal_root: `-----BEGIN CERTIFICATE-----
MII_COLE_O_SEU_ROOT_INTERNO_AQUI...
-----END CERTIFICATE-----`,

        internal_inter: `-----BEGIN CERTIFICATE-----
MII_COLE_A_SUA_ICA_INTERNA_AQUI...
-----END CERTIFICATE-----`,

        internal_bundle: `-----BEGIN CERTIFICATE-----
MII_COLE_A_SUA_ICA_INTERNA_AQUI...
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MII_COLE_O_SEU_ROOT_INTERNO_AQUI...
-----END CERTIFICATE-----`,

        // --- CADEIA EXTERNA ---
        external_root: `-----BEGIN CERTIFICATE-----
MII_COLE_O_SEU_ROOT_EXTERNO_AQUI...
-----END CERTIFICATE-----`,

        external_web: `-----BEGIN CERTIFICATE-----
MII_COLE_A_SUA_ICA_WEB_EXTERNA_AQUI...
-----END CERTIFICATE-----`,

        external_web_bundle: `-----BEGIN CERTIFICATE-----
MII_COLE_A_SUA_ICA_WEB_EXTERNA_AQUI...
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MII_COLE_O_SEU_ROOT_EXTERNO_AQUI...
-----END CERTIFICATE-----`,

        external_infra: `-----BEGIN CERTIFICATE-----
MII_COLE_A_SUA_ICA_INFRA_EXTERNA_AQUI...
-----END CERTIFICATE-----`,

        external_infra_bundle: `-----BEGIN CERTIFICATE-----
MII_COLE_A_SUA_ICA_INFRA_EXTERNA_AQUI...
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MII_COLE_O_SEU_ROOT_EXTERNO_AQUI...
-----END CERTIFICATE-----`
    },
    
    crls: {
        // --- LISTAS DE REVOGAÇÃO (CRL) ---
        internal: `-----BEGIN X509 CRL-----
MII_COLE_A_SUA_CRL_INTERNA_AQUI...
-----END X509 CRL-----`,

        external: `-----BEGIN X509 CRL-----
MII_COLE_A_SUA_CRL_EXTERNA_AQUI...
-----END X509 CRL-----`
    }
};