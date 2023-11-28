export type User = {
    login?: string
    img?: string
    pswd?: string
    name?: string
    email?: string
    active?: string
    activation_code?: string
    priv_admin?: string
    idempresa_fk?: number
    id_user?: number
    fecha_registro_user?: string
    id_provincia?: number
    movil?: string
}

export type UserMeasures = {
    id_contenido_pk?: number
    idenc_hc_pk?: number
    fecha_registro_cont?: string
    idempresa_cont_fk?: number
    imc?: number
    peso?: number
    pgc?: number
}